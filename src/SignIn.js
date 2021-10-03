import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import realtime from './firebase';

const SignIn = () => {
    const auth = getAuth();
    let user = auth.currentUser;
    
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
            })
    }

    return (
        <button onClick={signInWithGoogle}>Sign in</button>
    )

}

export default SignIn;