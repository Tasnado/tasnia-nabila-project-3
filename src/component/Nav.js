// import { getAuth, signOut } from "firebase/auth";
import { useState } from "react/cjs/react.development";
import AddRooms from "./AddRooms";
import Rooms from "./Rooms";

const Nav = () => {
    // const auth = getAuth();
    // const signingOut = () => {
    //     signOut(auth)
    // }
    const [clickedAddRoom, setClickedAddRoom] = useState(false)

    
    return(
        <div className="wrapper">
            <nav className="navigation">
                <button onClick={() => setClickedAddRoom(prevClickedAddRoom => !prevClickedAddRoom) }>Add</button>
                <h2>Welcome</h2>
                <ul>
                    <li>
                        <p>Logout</p>
                    </li>
                </ul>
            </nav>

            { clickedAddRoom? 
                (<AddRooms />) : (<Rooms />)
            }



        </div>
    )
    // return(
    //     <div className="wrapper">
    //         <nav className="navigation">
    //             <button onCLick={ AddRooms }>Add</button>
    //             <h2>Welcome, {auth.currentUser.displayName}</h2>
    //             <ul>
    //                 <li onClick={ signingOut }>
    //                     <p>Logout</p>
    //                 </li>
    //             </ul>
    //         </nav>

            

    //     </div>
    // )
}

export default Nav;