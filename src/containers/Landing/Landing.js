import React, { Fragment, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Landing.scss';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SportsLanding from '../SportsLanding/SportsLanding';
import EventDetailPage from '../EventDetailPage/EventDetailPage';
import NotFound from '../../components/NotFound/NotFound';

const Landing = (props) => {
  let contentClass = 'main-content ';
  const [sidebarState, setSidebarState] = useState({
    showLeftSidebar: true
  });

  const onShowLeftSidebar = () => {
    setSidebarState({
      showLeftSidebar: !sidebarState.showLeftSidebar
    });
  };

  if (!sidebarState.showLeftSidebar) {
    contentClass += 'left-hidden';
  }
  return (
    <Fragment>
      <Header toggleLinks={onShowLeftSidebar}/>
      <div className="content-container">
        <Sidebar show={sidebarState.showLeftSidebar} side="left"/>
        <div className={contentClass}>
          <main role="main">
            <Switch>
              <Route path="/" exact render={() => <SportsLanding {...props}/>}/>
              <Route path="/event-detail/:id" exact render={() => <EventDetailPage popularEvents={props.popularEvents}/>}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        </div>
        <Sidebar popularEvents={props.popularEvents} side="right"/>
      </div>
    </Fragment>
  );
};

export default Landing;
