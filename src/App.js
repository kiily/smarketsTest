import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Landing from './containers/Landing/Landing';

import requestor from './utils/requestor';

class App extends Component {

  // TODO: move this logic to the Landing container and make this component functional
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
        <BrowserRouter>
          <Landing popularEvents={this.state.popularFootballEvents} currentSport="football" eventsLoaded={this.state.eventsLoaded}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
