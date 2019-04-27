import React, { Component } from 'react';
import logo from '../logo.svg';
import requestor from '../utils/requestor';

import './App.scss';

class App extends Component {
  
  state = {
    popularFootballEventData: []
  };

  async componentDidMount() {
    const popularFootballEventRes = await requestor.getPopularEventData('football');
    const popularFootballEventData = popularFootballEventRes.map(res => res.data.events[0]);
    this.setState({ popularFootballEventData });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
        </header>
        <div className="content-container">
            
        </div>
      </div>
    );
  }
}

export default App;
