import { useState } from "react";
import { ref, push } from 'firebase/database';
import realtime from './firebase';
import './App.css';

const Chat = () => {
    const [message, setMessage] = useState();

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (message.trim()) {
            const dbRef = ref(realtime);
            const messageObject = { text: message }
            push(dbRef, messageObject);

            setMessage("");
        }
    }

    return (
        <div className="Chat">
            <form onSubmit={handleSubmit}>
                <label></label>
                <input
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Say something nice"
                    onChange={handleChange}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat;