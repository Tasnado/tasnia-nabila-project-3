import realtime from '../firebase';

import { useState, useEffect } from "react";
import { ref, push } from 'firebase/database';

const AddRooms = () => {
    const [chatRoomName, setchatRoomName] = useState("");
    const [userChatPassworld, setUserChatPassworld] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (chatRoomName && chatRoomName.trim()) {
            console.log(chatRoomName);
            console.log(userChatPassworld);
            const dbRef = ref(realtime);

            const setUpRoomObject = {
                chatName: chatRoomName,
                password: userChatPassworld
            }

            push(dbRef, setUpRoomObject);
        }
        setchatRoomName("")
        setUserChatPassworld("")
    }


    return (
        <>
            <div className="chatRoomAddForm">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="chatRoomName">Chat Room Name</label>
                    <input type="text" 
                        id="chatRoomName" 
                        className="chatRoomName" 
                        placeholder="Chat room Name" 
                        value={ chatRoomName }
                        onChange={ (e) => setchatRoomName(e.target.value)}
                    />

                    <label htmlFor="chatRoomPassword">Leave it blank if you don't want to make it private</label>
                    <input type="text" 
                        id="password" 
                        placeholder="A password" 
                        value={ userChatPassworld } 
                        onChange={(e) => setUserChatPassworld(e.target.value)}
                    />

                    <button type="submit">Add Room</button>
                </form>
            </div>
        </>
    )
}

export default AddRooms;