import './App.css';
import { ContentA } from './components/ContentA.js';
import { ContentB } from './components/ContentB.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentA />
      <ContentB />
      <Footer />
    </div>
  );
}

export default App;
