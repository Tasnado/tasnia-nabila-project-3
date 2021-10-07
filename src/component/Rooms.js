import realtime from '../firebase';

import { useState, useEffect } from "react";
import { ref, onValue } from 'firebase/database';

const Rooms = () => {
    const [chatRooms, setChatRooms] = useState([]);
    const [allMessages, setAllMessages] = useState([]);

    useEffect(() => {
        const dbRef = ref(realtime);

        onValue(dbRef, (snapshot) => {
            const myData = snapshot.val();
            const newArray = [];

            for (let propertyName in myData) {
                const roomObject = {
                    key: propertyName,
                    chatName: myData[propertyName].chatName,
                }
                newArray.push(roomObject);
            }
            setChatRooms(newArray);
        });

        // onValue(dbRef, (snapshot) => {
        //     const newArrayMessages = [];
        //     snapshot.forEach((childSnapShot) => {
        //         newArrayMessages.push(childSnapShot.val().allMessages);
        //     })
        //     setAllMessages(newArrayMessages);
        //     console.log(newArrayMessages);
        // })

    }, []);


    return(
        <div className="rooms wrapper">
            {
                chatRooms.map((room) => {
                    return(
                        <>
                            <div key={room.key} className="individualChatRoom">
                                <h3>{room.chatName}</h3>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Rooms;