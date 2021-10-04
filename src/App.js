import Messages from './component/Messages';
import Header from './component/Header';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

      {!signedIn ?
        <Header /> :
        <main>
          {signedIn ? <Messages /> : ""}
        </main>
      }

      <footer>
        <p>Made by Tasnia Nabila :)</p>
      </footer>

    </div>
  );
}

export default App;
