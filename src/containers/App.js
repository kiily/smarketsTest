import React, { Component } from 'react';
import Header from '../components/Header/Header';

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
        <Header />
        <div className="content-container">

        </div>
      </div>
    );
  }
}

export default App;
