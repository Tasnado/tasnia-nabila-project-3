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

    // on submit, gets the user input and pushes them into firebase
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

            // takes the userText and sends to the Music component to play sound based on certain user keywords
            const userText = userInput.toLowerCase()
            Music(userText);
        }
        setUserInput("");
    }

    // function to add emojis to the userText
    const onEmojiClick = (event, emojiObject) => {
        // adds the emoji with the text or by itself
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
                        onChange={ (e) => setUserInput(e.target.value) }
                    />
                    {/* to display font awesome icons */}
                    <FontAwesomeIcon 
                        icon={emojiHover} 
                        onClick={ () => setChosenEmoji(val => !val) }
                        // mimics the hover effect
                        onMouseEnter={ () => setEmojiHover(faGrinBeam) }
                        onMouseLeave={ () => setEmojiHover(faSmile) }
                    />
                    {/* calls the emoji picker package */}
                    { chosenEmoji && <Picker
                        onEmojiClick={onEmojiClick} 
                        // to style it to prevent default inline-styling on the emojipicker container
                        pickerStyle={
                            {position: 'absolute', 
                            bottom: '10vh', 
                            width: '100%'}
                        }
                    />}
                </div>
                <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
        </div>
    )
}

export default Chat;