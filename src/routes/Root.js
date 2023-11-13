import './Root.css'

function Root() {
    return <div>
      <header className="App-header">
        <h1>A header will go here</h1>
                <a
                  className="App-link"
                  href={`/about`}
                  //target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn about this project
                </a>
      </header>
    </div>;
}

export default Root