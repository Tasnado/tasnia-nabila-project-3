import realtime from '../firebase';
import Chat from './Chat'
import { useState, useEffect, useRef } from "react";
import { ref, onValue } from 'firebase/database';
import { getAuth } from "firebase/auth";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const scrollTo = useRef();
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        const dbRef = ref(realtime);

        onValue(dbRef, (snapshot) => {
            const myData = snapshot.val();
            const newArray = [];

            for (let propertyName in myData) {
                const messagesObject = {
                    key: propertyName,
                    text: myData[propertyName].text,
                    uid: myData[propertyName].uid,
                    profileImg: user.photoURL
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
                            <div className={ user.uid === individualMessage.uid ? 'theMessage messageSent' : 'theMessage messageReceived' }>
                                <img src={ individualMessage.profileImg } alt="profile picture" />
                                <p className={ user.uid === individualMessage.uid ? "sent" : "received" }  key={individualMessage.key}>{individualMessage.text}</p>
                            </div>
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