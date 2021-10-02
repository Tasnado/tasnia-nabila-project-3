import Chat from './Chat';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { ref, onValue } from 'firebase/database';
import realtime from './firebase';

function App() {
  const [advice, setAdvice] = useState([]);
  
  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, (snapshot) => {
      const myData = snapshot.val();
      const newArray = [];

      for (let propertyName in myData) {
        const adviceObject = {
          key: propertyName,
          text: myData[propertyName].text
        }
        newArray.push(adviceObject);
      }
      setAdvice(newArray);
    });
  }, []);
  

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>HelpFul</h1>
          <p>Leave behind helpful advice for strangers</p>
        </div>
      </header>

      <main>
        <div className="wrapper">
          <div className="messages">
            {
              advice.map((individualMessage) => {
                return (
                  <p key={individualMessage.key}>{individualMessage.text}</p>
                )
              })
            }
          </div>

          <Chat />
        </div>
      </main>

      <footer>
        <p>Made by Tasnia Nabila :(</p>
      </footer>

    </div>
  );
}

export default App;
