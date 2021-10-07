import './App.css';
import Messages from './component/Messages';
import Header from './component/Header';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const auth = getAuth();
  const [signedIn, setSignedIn] = useState(false);

  // checks if the user is signed in
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignedIn(true)
    } else {
      setSignedIn(false)
    }
  });


  return (
    <div className="App">

      {/* If user is not signed in, header (to sign in) is displayed. Otherwise, sent to the chatroom */}
      {!signedIn ?
        <Header /> :
        <main>
          {signedIn ? <Messages /> : ""}
        </main>
      }

      <footer>
        <p>Made by Tasnia Nabila at Juno. Sounds from mixkit</p>
      </footer>

    </div>
  );
}

export default App;
