import realtime from '../firebase';

import { useState } from "react";
import { ref, push } from 'firebase/database';
import { getAuth } from "firebase/auth";
import Music from './Music';

// import happyBellsBotification from '../audio/happyBellsBotification.wav'
// import messagePopAlert from '../audio/messagePopAlert.mp3'
// import positiveNotification from '../audio/positiveNotification.wav'
// import correctAnswerReward from '../audio/correctAnswerReward.wav';

const Chat = () => {
    const [userInput, setUserInput] = useState();
    const auth = getAuth();
    const user = auth.currentUser;

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userInput && userInput.trim()) {
            const dbRef = ref(realtime);
            const userInputObject = { 
                text: userInput,
                uid: user.uid,
                profileImg: user.photoURL
            }
            push(dbRef, userInputObject);

            const userText = userInput.toLowerCase()
            
            Music(userText);
            // if (userText === "juno") {
            //     playSound(happyBellsBotification);
            // } else if (userText === "cohort 36" || userText === "cohort36") {
            //     playSound(positiveNotification);
            // } else if (userText === "buff skeleton" || userText === "buffskeleton") {
            //     playSound(correctAnswerReward);
            // } else {
            //     playSound(messagePopAlert);
            // }
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