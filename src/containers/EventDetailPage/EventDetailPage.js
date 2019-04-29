import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

import './EventDetailPage.scss';
import { createMinimalEvent } from '../../utils/helpers';
class EventDetailPage extends Component {

  render() {
    const eventId = this.props.match.params.id;
    const event = this.props.popularEvents.find(event => event.id === eventId);
    let minimalEvent = null;
    // e.g. MONDAY, APRIL 29, 8:00 PM
    const detailDateFormat = 'EEEE, LLLL d, h:mm aa';
    if (event) {
      minimalEvent = createMinimalEvent(event, detailDateFormat);
    }
    return (
      minimalEvent &&
        <div className="EventDetailPage-container">
          <ol className="breadcrumb-nav">
            <li className="breadcrumb">{minimalEvent.sport}</li>
            <li className="breadcrumb">
              <div className="caret-container">
                <FontAwesomeIcon icon={faCaretRight}/>
              </div>
              {minimalEvent.competition}
            </li>
          </ol>
          <div className="event-header">
            <div className="teams-container">
              <h1 className="competitor">
                <span className="competitor-text">{minimalEvent.teams[0]}</span>
              </h1>
              <h1 className="competitor">
                <span className="competitor-text">{minimalEvent.teams[1]}</span>
              </h1>
            </div>
            <div className="event-info-container">
              <div className="event-date">
                <div className="calendar-icon-container">
                  <FontAwesomeIcon icon={faCalendarDay}/>
                </div>
                <span className="event-date-text">{minimalEvent.startTime}</span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

EventDetailPage.propTypes = {
  popularEvents: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default withRouter(EventDetailPage);
