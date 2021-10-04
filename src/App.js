import Messages from './component/Messages';
// import SignOut from './component/SignOut';
// import SignIn from './component/SignIn';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './App.css';
import Header from './component/Header';

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

      <Header />

      {/* <header>
        <div className="wrapper">
          <h1>Welcome, stranger.</h1>
          <p>This your last chance. After this there is no turning back. You click the blue button, the story ends. You go back to talking with whoever you were talking to. You click the red button, you open yourself to a world of new people.</p>

          { signedIn ? <SignOut /> : <SignIn /> }

        </div>
      </header> */}



      <main>
        { signedIn ? <Messages /> : "" }
      </main>

      <footer>
        <p>Made by Tasnia Nabila :)</p>
      </footer>

    </div>
  );
}

export default App;
