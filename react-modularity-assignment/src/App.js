import logo from './logo.svg';
import './App.css';
import { ContentA } from './components/ContentA.js';
import { ContentB } from './components/ContentB.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
