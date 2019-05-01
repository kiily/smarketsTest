import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import EventInfoList from '../../components/EventInfoList/EventInfoList';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import Spinner from '../../components/Spinner/Spinner';

class SportsLanding extends Component {

  render() {
    return (
      <Fragment>
        <ContentHeader currentSport={this.props.currentSport}/>
        {this.props.eventsLoaded ? <EventInfoList events={this.props.popularEvents}/> : <Spinner/>}
      </Fragment>
    );
  }
}

SportsLanding.propTypes = {
  currentSport: PropTypes.string,
  eventsLoaded: PropTypes.bool,
  popularEvents: PropTypes.array
};

export default SportsLanding;
