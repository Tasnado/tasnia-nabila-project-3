import { getAuth, signOut } from "firebase/auth";

const Nav = () => {
    const auth = getAuth();
    const signingOut = () => {
        signOut(auth)
            // .then(() => {
            //     // Sign-out successful.
            //     console.log("signed Out!")
            // }).catch((error) => {
            //     // An error happened.
            //     console.log(error);
            // });
    }

    
    return(
        <nav>
            <p>Welcome, {auth.currentUser.displayName}</p>
            <ul>
                <li onClick={ signingOut }>
                    <p>LogOut</p>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;