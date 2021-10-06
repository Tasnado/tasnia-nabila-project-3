import realtime from '../firebase';
import Picker from 'emoji-picker-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSmile, faGrinBeam } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";
import { ref, push } from 'firebase/database';
import { getAuth } from "firebase/auth";
import Music from './Music';


const Chat = () => {
    const [userInput, setUserInput] = useState("");
    const auth = getAuth();
    const { uid, photoURL } = auth.currentUser;
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [emojiHover, setEmojiHover] = useState(faSmile)

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

    const onEmojiClick = (event, emojiObject) => {
        setUserInput(prevInput => prevInput + emojiObject.emoji);
        setChosenEmoji(null);
    }

    return (
        <div className="Chat">
            <form onSubmit={handleSubmit}>
                <label htmlFor="userInput"></label>
                <div className="inputAndEmoji">
                    <input
                        type="text"
                        id="userInput"
                        className="userInput"
                        value={ userInput }
                        placeholder="Say something nice"
                        onChange={ handleChange }
                    />
                    <FontAwesomeIcon 
                        icon={emojiHover} 
                        onClick={ () => setChosenEmoji(val => !val) }
                        onMouseEnter={ () => setEmojiHover(faGrinBeam) }
                        onMouseLeave={ () => setEmojiHover(faSmile) }
                    />
                    { chosenEmoji && <Picker
                        onEmojiClick={onEmojiClick} />}
                </div>
                <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
        </div>
    )
}

export default Chat;