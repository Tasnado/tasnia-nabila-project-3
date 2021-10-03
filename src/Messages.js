import { useState, useEffect, useRef } from "react";
import { ref, onValue } from 'firebase/database';
import realtime from './firebase';
import Chat from './Chat'

const Messages = () => {

    const [messages, setMessages] = useState([]);
    const scrollTo = useRef();

    useEffect(() => {
        const dbRef = ref(realtime);

        onValue(dbRef, (snapshot) => {
            const myData = snapshot.val();
            const newArray = [];

            for (let propertyName in myData) {
                const messagesObject = {
                    key: propertyName,
                    text: myData[propertyName].text
                }
                newArray.push(messagesObject);
            }
            setMessages(newArray);
        });
    }, []);

    useEffect(() => {
        scrollTo.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    return (
        <div className="wrapper">

            <div className="messages">
                {
                    messages.map((individualMessage) => {
                        return (
                            <p key={individualMessage.key}>{individualMessage.text}</p>
                        )
                    })
                }
                <span ref={scrollTo}></span>
            </div>

            <Chat />
        </div>
    )
}

export default Messages;