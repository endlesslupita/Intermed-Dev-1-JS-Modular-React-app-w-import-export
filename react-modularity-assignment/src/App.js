import logo from './logo.svg';
import './App.css';
import { ContentA } from './components/ContentA.js';
import { ContentB } from './components/ContentB.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <header className="Header">
        
        <p>
          Testing header content
        </p>
        
      </header>

      <body className="ContentA">
        
        <p>
          Testing body content A
        </p>
        
      </body>

      <body className="ContentB">
        
        <p>
          Testing body content B
        </p>
        
      </body>
            
      <footer className="Footer">
        
        <p>
          Testing footer content
        </p>
        
      </footer>
    </div>
  );
}

export default App;
