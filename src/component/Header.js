import backgroundVideo from '../assets/backgroundVideo.mp4'
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Header = () => {
    const auth = getAuth();
    const [signedIn, setSignedIn] = useState(false);
    const [bluePill, setBluePill] = useState(false);
    const [heading, setHeading] = useState("Welcome, stranger.")
    const [instruction, setInstruction] = useState("You found the secret chat room. There is no turning back. You click the blue button, the story ends. You click the red button, you open yourself to a world of new people.")

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setSignedIn(true)
        } else {
            setSignedIn(false)
        }
    });

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const clickedBlueButton = () => {
        setBluePill(true);
        setHeading("404");
        setInstruction("The resource requested could not be found on this server");
    }


    return (
        <header className={bluePill ? "blueButtonClicked" : null}>
            <video autoPlay loop muted id="myVideo">
                <source src={backgroundVideo} type="video/mp4" />
            </video>

            <div className="wrapper">
                <h1 className={bluePill ? "headingError" : "heading"}>{heading}</h1>
                {bluePill ? <p className="notFoundError">Not Found</p> : null}
                <p className={bluePill ? null : "instructionPara"}>{instruction}</p>

                {!bluePill ?
                    <div className="headerButtons">
                        {signedIn ?
                            null :
                            <>
                                <button className="redButton" onClick={signInWithGoogle}>Red</button>
                                <button className="blueButton" onClick={clickedBlueButton}>Blue</button>
                            </>
                        }
                    </div> :
                    null
                }
            </div>
        </header>
    )
}

export default Header;