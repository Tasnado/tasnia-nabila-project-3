import Messages from './component/Messages';
import SignOut from './component/SignOut';
import SignIn from './component/SignIn';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './App.css';

function App() {
  const auth = getAuth();
  const [signedIn, setSignedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignedIn(true)
      // console.log(user.photoURL)
    } else {
      setSignedIn(false)
    }
  });


  return (
    <div className="App">


      <header>
        <div className="wrapper">
          <h1>This is a heading</h1>
          <p>I am a header</p>

          { signedIn ? <SignOut /> : <SignIn /> }

        </div>
      </header>



      <main>
        { signedIn ? <Messages /> : <p className="signInMessage">Please Sign in to see chat room</p> }
      </main>

      <footer>
        <p>Made by Tasnia Nabila :(</p>
      </footer>

    </div>
  );
}

export default App;
