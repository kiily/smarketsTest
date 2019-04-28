import React, { Fragment, useState } from 'react';
import { Route } from 'react-router-dom';

import './Landing.scss';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SportsLanding from '../SportsLanding/SportsLanding';

const Landing = () => {
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
          <Route path="/" exact component={SportsLanding}/>
        </div>
        <Sidebar side="right"/>
      </div>
    </Fragment>
  );
};

export default Landing;
