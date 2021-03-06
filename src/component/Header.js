import backgroundVideo from '../assets/backgroundVideo.mp4'
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import redButtonSound from '../audio/redButtonSound.wav';
import blueButtonSound from '../audio/blueButtonSound.wav';

const Header = () => {
    const auth = getAuth();
    const [signedIn, setSignedIn] = useState(false);
    const [bluePill, setBluePill] = useState(false);
    const [heading, setHeading] = useState("Welcome, stranger.")
    const [instruction, setInstruction] = useState("It seems you found our secret chat room. There is no turning back. You click the blue button, the story ends. You click the red button, you open yourself to a world of new people.")

      // when user chooses to sign in, user logs in with firebase google pop-up authentication.
    const signInWithGoogle = () => {
        buttonSoundClick(redButtonSound);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                setSignedIn(true);
            }).catch((error) => {
                console.log(error)
            })
        }

    // changes header message to mimic 404 error when user clicks the blue button
    const clickedBlueButton = () => {
        setBluePill(true);
        setHeading("404 BLUE");
        setInstruction("The resource requested could not be found on this server");
        buttonSoundClick(blueButtonSound);
    }

    // plays sound based on given parameter which contains the sound
    const buttonSoundClick = (url) => {
        const audio = new Audio(url);
        audio.play();
    }

    return (
        <header className={bluePill ? "blueButtonClicked" : null}>
            
            {/* Welcome page background */}
            <video autoPlay loop muted id="myVideo">
                <source src={backgroundVideo} type="video/mp4" />
            </video>

            {/* changes classnames of header elements if they click blue button to be stylized in css */}
            <div className="wrapper">
                <h1 className={bluePill ? "headingError" : "heading"}>{heading}</h1>
                {bluePill ? <p className="notFoundError">You made your choice</p> : null}
                <p className={bluePill ? null : "instructionPara"}>{instruction}</p>

                {/* doesn't display buttons if user chooses blue button */}
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