import { getAuth, signOut } from "firebase/auth";

const Nav = () => {
    const auth = getAuth();
    const signingOut = () => {
        signOut(auth)
    }

    // gives user the option to log out and displays their name in the header
    return(
        <nav className="navigation">
            <p>Welcome, {auth.currentUser.displayName}</p>
            <ul>
                <li onClick={ signingOut }>
                    <p>Logout</p>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;