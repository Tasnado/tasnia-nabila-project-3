import realtime from '../firebase';


import { useState } from "react";
import { ref, push } from 'firebase/database';
import { getAuth } from "firebase/auth";
import Music from './Music';


const Chat = () => {
    const [userInput, setUserInput] = useState();
    const auth = getAuth();
    const { uid, photoURL } = auth.currentUser;

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userInput && userInput.trim()) {
            const dbRef = ref(realtime);
            const userInputObject = { 
                text: userInput,
                uid,
                photoURL
            }
            push(dbRef, userInputObject);

            const userText = userInput.toLowerCase()
            
            Music(userText);
        }
        setUserInput("");
    }

    return (
        <div className="Chat">
            <form onSubmit={handleSubmit}>
                <label htmlFor="userInput"></label>
                <input
                    type="text"
                    id="userInput"
                    value={ userInput }
                    placeholder="Say something nice"
                    onChange={ handleChange }
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat;