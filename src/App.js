import Messages from './Messages';
// import Chat from './Chat'
import SignOut from './SignOut';
import { useState } from 'react';
// import { getAuth } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import SignIn from './SignIn';
import './App.css';

function App() {
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
    <div className="App">


      <header>
        <div className="wrapper">
          <h1>This is a heading</h1>
          <p>I am a header</p>

          { signedIn ? <SignOut /> : <SignIn /> }

        </div>
      </header>



      <main>
        { signedIn ? <Messages /> : <p className="signInMessage">Please Sign in</p> }
      </main>

      <footer>
        <p>Made by Tasnia Nabila :(</p>
      </footer>







      {/* <header>
        <div className="wrapper">
          <h1>This is a heading</h1>
          <p>I am a header</p>
        </div>
      </header> */}

      {/* <main>
        <div className="wrapper">

          <Messages />
          <Chat />

        </div>
      </main>

      <footer>
        <p>Made by Tasnia Nabila :(</p>
      </footer> */}

    </div>
  );
}

export default App;
