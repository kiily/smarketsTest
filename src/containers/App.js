import React, { Component } from 'react';
import Header from '../components/Header/Header';
import EventInfoList from '../components/EventInfoList/EventInfoList';
import ContentHeader from '../components/ContentHeader/ContentHeader';

import requestor from '../utils/requestor';

import './App.scss';

class App extends Component {
  
  state = {
    currentSport: 'football',
    popularFootballEvents: []
  };

  async componentDidMount() {
    const popularFootballEvents = await requestor.getPopularEventData(this.state.currentSport);
		console.log("TCL: App -> componentDidMount -> popularFootballEvents", popularFootballEvents)
    this.setState({ popularFootballEvents });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-container">
            <ContentHeader currentSport={this.state.currentSport}/>
            <EventInfoList events={this.state.popularFootballEvents}/>
        </div>
      </div>
    );
  }
}

export default App;
