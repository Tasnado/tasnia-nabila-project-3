import realtime from '../firebase';
import Chat from './Chat'
import Nav from './Nav';

import { useState, useEffect, useRef } from "react";
import { ref, onValue } from 'firebase/database';
import { getAuth } from "firebase/auth";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const scrollTo = useRef();
    const auth = getAuth();
    const { uid } = auth.currentUser;

    // displays the messages stored in firebase
        // only when changes in the database occur
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
                    photoURL: myData[propertyName].photoURL
                }
                newArray.push(messagesObject);
            }
            setMessages(newArray);
        });
    }, []);

    // scrolls to the span element each time new message is added to automatically scroll to lates message
    useEffect(() => {
        scrollTo.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            <div className="wrapper">
            <Nav />

                <div className="messages">
                    {
                        messages.map((individualMessage) => {
                            return (
                                <div key={individualMessage.key} className={ uid === individualMessage.uid ? 'theMessage messageSent' : 'theMessage messageReceived' }>
                                    <img  src={ individualMessage.photoURL } alt="google profile" />
                                    <p className={ uid === individualMessage.uid ? "sent" : "received" }>{individualMessage.text}</p>
                                </div>
                            )
                        })
                    }
                    <span ref={scrollTo}></span>
                </div>

                <Chat />
            </div>
        </>
    )
}

export default Messages;