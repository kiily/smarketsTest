import React, { Component } from 'react';
import './App.scss';

import Header from '../components/Header/Header';
import EventInfoList from '../components/EventInfoList/EventInfoList';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import Spinner from '../components/Spinner/Spinner';
import Sidebar from '../components/Sidebar/Sidebar';

import requestor from '../utils/requestor';
class App extends Component {
  
  state = {
    currentSport: 'football',
    popularFootballEvents: [],
    eventsLoaded: false,
    showLeftSidebar: false
  };

  async componentDidMount() {
    const popularFootballEvents = await requestor.getPopularEventData(this.state.currentSport);
		console.log("TCL: App -> componentDidMount -> popularFootballEvents", popularFootballEvents)
    this.setState({ popularFootballEvents, eventsLoaded: true });
  }

  onShowLeftSidebar = () => {
    this.setState({
      showLeftSidebar: !this.state.showLeftSidebar
    })
  }

  render() {
    let contentClass = 'main-content ';
    if (!this.state.showLeftSidebar) {
      contentClass += 'left-hidden';
    }
    return (
      <div className="App">
        <Header toggleLinks={this.onShowLeftSidebar}/>
        <div className="content-container">
            {this.state.showLeftSidebar && <Sidebar side="left"/>}
            <div className={contentClass}>
              <ContentHeader currentSport={this.state.currentSport}/>
              {this.state.eventsLoaded ? <EventInfoList events={this.state.popularFootballEvents}/> : <Spinner/>}
            </div>
            <Sidebar side="right"/>
        </div>
      </div>
    );
  }
}

export default App;
