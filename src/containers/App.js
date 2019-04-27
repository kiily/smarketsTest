import React, { Component } from 'react';
import logo from '../logo.svg';

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
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-content-container">
          
        </div>
      </div>
    );
  }
}

export default App;
