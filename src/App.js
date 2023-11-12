import logo from './logo.svg';
import './App.css';
import Home from './Home.js'

// the app consists of a router to other pages containing the pertinent information
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
