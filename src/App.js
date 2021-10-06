import './App.css';
import Messages from './component/Messages';
import Header from './component/Header';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";


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
        <p>Made by Tasnia Nabila at Juno. Sounds from mixkit</p>
      </footer>

    </div>
  );
}

export default App;
