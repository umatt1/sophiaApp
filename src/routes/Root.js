import './Root.css'

function Root() {
    return <div>
      <header className="App-header">
        <div className="Top-header">
          <h1 className="Announcer">PrEPpy</h1>
          <button className="App-start">
          <a
            //className="App-start"
            href={`/home`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start
          </a>
          </button>
        </div>
        <a
          className="App-link"
          href={`/about`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about this project
        </a>
      </header>
    </div>;
}

export default Root