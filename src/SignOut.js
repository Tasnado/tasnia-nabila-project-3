import { getAuth, signOut } from "firebase/auth";

const SignOut = () => {
    const auth = getAuth();

    const signingOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("signed Out!")
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }

    return auth.currentUser && (
        <button onClick={ signingOut }>SignOut</button>
    )
}

export default SignOut;