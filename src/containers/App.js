import React, { Component } from 'react';
import Header from '../components/Header/Header';
import EventInfo from '../components/EventInfoList/EventInfo/EventInfo';

import requestor from '../utils/requestor';

import './App.scss';

class App extends Component {
  
  state = {
    popularFootballEvents: []
  };

  async componentDidMount() {
    const popularFootballEvents = await requestor.getPopularEventData('football');
    this.setState({ popularFootballEvents });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-container">
            <EventInfo sport="football" competition={"Premier"} />
        </div>
      </div>
    );
  }
}

export default App;
