import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  componentDidMount() {
    const eventSource = new EventSource('https://api.smarkets.com/v3/popular/event_ids/sport/football/');
    eventSource.onmessage = (event) => {
      // TODO: solve CORS errors for HTTP requests
      console.log('got a message', event);
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
}

export default App;
