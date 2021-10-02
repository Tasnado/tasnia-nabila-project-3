import Messages from './Messages';
import Chat from './Chat';
import './App.css';

function App() {
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

          <Messages />
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
