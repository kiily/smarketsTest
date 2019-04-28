import React, { PureComponent, Fragment } from 'react';

import EventInfoList from '../../components/EventInfoList/EventInfoList';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import Spinner from '../../components/Spinner/Spinner';

class SportsLanding extends PureComponent {

  render() {
    return (
      <Fragment>
        <ContentHeader currentSport={this.props.currentSport}/>
        {this.props.eventsLoaded ? <EventInfoList events={this.props.popularEvents}/> : <Spinner/>}
      </Fragment>
    );
  }
}

export default SportsLanding;
