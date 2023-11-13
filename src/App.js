import './App.css';
import Root from './routes/Root.js'

// the app consists of a router to other pages containing the pertinent information
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Root />
      </header>
    </div>
  );
}

export default App;
