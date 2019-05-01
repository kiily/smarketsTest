import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Landing.scss';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SportsLanding from '../SportsLanding/SportsLanding';
import EventDetailPage from '../EventDetailPage/EventDetailPage';
import NotFound from '../../components/NotFound/NotFound';

import requestor from '../../utils/requestor';

class Landing extends Component {
  state = {
    currentSport: 'football',
    popularEvents: [],
    eventsLoaded: false,
    showLeftSidebar: true
  };

  async componentDidMount() {
    try {
      const popularFootballEvents = await requestor.getPopularEventData(this.state.currentSport);
      this.setState({ popularEvents: popularFootballEvents, eventsLoaded: true });
    } catch(error) {
      // Re-render to trigger error boundary
      this.setState({
        error
      });
    }
  }
  
  onShowLeftSidebar = () => {
    this.setState({ showLeftSidebar: !this.state.showLeftSidebar });
  }

  render() {
    if (this.state.error) throw new Error(this.state.error);
    let contentClass = 'main-content ';
    if (!this.state.showLeftSidebar) {
      contentClass += 'left-hidden';
    }
    return (
      <Fragment>
        <Header toggleLinks={this.onShowLeftSidebar}/>
        <div className="content-container">
          <Sidebar show={this.state.showLeftSidebar} side="left"/>
          <div className={contentClass}>
            <main role="main">
              <Switch>
                <Route path="/" exact render={() => <SportsLanding {...this.state}/>}/>
                <Route path="/event-detail/:id" exact render={() => <EventDetailPage popularEvents={this.state.popularEvents}/>}/>
                <Route component={NotFound}/>
              </Switch>
            </main>
          </div>
          <Sidebar popularEvents={this.state.popularEvents} side="right"/>
        </div>
      </Fragment>
    );
  }
}

export default Landing;
