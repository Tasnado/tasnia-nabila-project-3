import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Auth = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then( (result) => {
            // this gives a google access token which can be used to access the google api
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // the signed-in user info
            const user = result.user;
        }).catch( (error) => {
            // Handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used
            const email = error.email;
            // The AuthCredential type that was used
            const credential = GoogleAuthProvider.credentialFromError(error);
        })

        return(
            <button>Sign In</button>
        )

}

export default Auth;