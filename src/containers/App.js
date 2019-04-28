import React, { Component } from 'react';
import Header from '../components/Header/Header';
import EventInfoList from '../components/EventInfoList/EventInfoList';

import requestor from '../utils/requestor';

import './App.scss';

class App extends Component {
  
  state = {
    popularFootballEvents: []
  };

  async componentDidMount() {
    const popularFootballEvents = await requestor.getPopularEventData('football');
		console.log("TCL: App -> componentDidMount -> popularFootballEvents", popularFootballEvents)
    this.setState({ popularFootballEvents });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-container">
            <EventInfoList events={this.state.popularFootballEvents}/>
        </div>
      </div>
    );
  }
}

export default App;
