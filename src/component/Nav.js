import { getAuth, signOut } from "firebase/auth";

const Nav = () => {
    const auth = getAuth();
    const signingOut = () => {
        signOut(auth)
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