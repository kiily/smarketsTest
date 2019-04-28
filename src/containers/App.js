import React, { Component } from 'react';
import './App.scss';

import Header from '../components/Header/Header';
import EventInfoList from '../components/EventInfoList/EventInfoList';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import Spinner from '../components/Spinner/Spinner';

import requestor from '../utils/requestor';
class App extends Component {
  
  state = {
    currentSport: 'football',
    popularFootballEvents: [],
    eventsLoaded: false
  };

  async componentDidMount() {
    const popularFootballEvents = await requestor.getPopularEventData(this.state.currentSport);
		console.log("TCL: App -> componentDidMount -> popularFootballEvents", popularFootballEvents)
    this.setState({ popularFootballEvents, eventsLoaded: true });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-container">
            <ContentHeader currentSport={this.state.currentSport}/>
            {this.state.eventsLoaded ? <EventInfoList events={this.state.popularFootballEvents}/> : <Spinner/>}
        </div>
      </div>
    );
  }
}

export default App;
