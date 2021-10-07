import './App.css';
import Messages from './component/Messages';
import Header from './component/Header';
import Rooms from './component/Rooms';

import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Nav from './component/Nav';


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
      <main>
          {/* {signedIn ? <Messages /> : ""} */}
          <Nav />
      </main>

      {/* {!signedIn ?
        <Header /> :
        <main>
          {signedIn ? <Messages /> : ""}
          {signedIn ? <Rooms /> : ""}
        </main>
      } */}

      <footer>
        <p>Made by Tasnia Nabila at Juno. Sounds from mixkit.</p>
      </footer>

    </div>
  );
}

export default App;
