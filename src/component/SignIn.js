import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
    const auth = getAuth();
    // let user = auth.currentUser;

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        // .then((result) => {
        //     // user = result.user;
        // }).catch((error) => {
        //     // const errorCode = error.code;
        //     console.log(error);
        // })
    }

    return (
        <>
            <button className="redButton" onClick={ signInWithGoogle }>Red</button>
            <button className="blueButton">Blue</button>
        </>
    )

}

export default SignIn;