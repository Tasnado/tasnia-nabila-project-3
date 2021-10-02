import { useState } from "react";
import { ref, push } from 'firebase/database';
import realtime from './firebase';

const Chat = () => {
    const [userInput, setUserInput] = useState();

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userInput && userInput.trim()) {
            const dbRef = ref(realtime);
            const userInputObject = { text: userInput }
            push(dbRef, userInputObject);
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