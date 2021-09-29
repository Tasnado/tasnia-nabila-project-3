import { useState } from "react";

const Chat = () => {
    const [message, setMessage] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        if (message.trim()) {
            console.log( message );
        }
        setMessage("");
    }
    
    return(
        <div>
            <form onSubmit={ handleClick }>
                <label>
                    Message:
                    <input 
                        type="text" 
                        name="message"
                        value={ message }
                        onChange={e => setMessage(e.target.value)}
                    />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat;