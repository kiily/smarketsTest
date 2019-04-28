import React, { Component, Fragment } from 'react';

import EventInfoList from '../../components/EventInfoList/EventInfoList';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import Spinner from '../../components/Spinner/Spinner';

import requestor from '../../utils/requestor';


class SportsLanding extends Component {
    state = {
        currentSport: 'football',
        popularFootballEvents: [],
        eventsLoaded: false
    };

    async componentDidMount() {
        const popularFootballEvents = await requestor.getPopularEventData(this.state.currentSport);
        this.setState({ popularFootballEvents, eventsLoaded: true });
    }

    render() {
        return (
            <Fragment>
                <ContentHeader currentSport={this.state.currentSport}/>
                {this.state.eventsLoaded ? <EventInfoList events={this.state.popularFootballEvents}/> : <Spinner/>}
            </Fragment>
        );
    }
}

export default SportsLanding;