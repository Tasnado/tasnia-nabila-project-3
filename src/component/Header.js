import SignOut from './SignOut';
import SignIn from './SignIn';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {

    const auth = getAuth();
    const [signedIn, setSignedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setSignedIn(true)
        } else {
            setSignedIn(false)
        }
    });


    return (
        <header>
            <div className="wrapper">
                <h1>Welcome, stranger.</h1>
                <p>This your last chance. After this there is no turning back. You click the blue button, the story ends. You go back to talking with whoever you were talking to. You click the red button, you open yourself to a world of new people.</p>

                <div className="headerButtons">
                    { signedIn ? 
                        <SignOut /> :  
                        <SignIn />
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;