import React, { Component } from 'react';
import Header from '../components/Header/Header';
import EventInfo from '../components/EventInfo/EventInfo';

import requestor from '../utils/requestor';

import './App.scss';

class App extends Component {
  
  state = {
    popularFootballEventData: []
  };

  async componentDidMount() {
    const popularFootballEventRes = await requestor.getPopularEventData('football');
    const popularFootballEventData = popularFootballEventRes.map(res => res.data.events[0]);
		console.log("TCL: App -> componentDidMount -> popularFootballEventData", popularFootballEventData)
    this.setState({ popularFootballEventData });
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
