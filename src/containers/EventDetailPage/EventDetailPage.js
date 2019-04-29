import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { createMinimalEvent } from '../../utils/helpers';
class EventDetailPage extends Component {
  
  render() {
    const eventId = this.props.match.params.id;
		console.log("TCL: EventDetailPage -> render -> eventId", eventId)
    const event = this.props.popularEvents.find(event => event.id === eventId);
    console.log('event detail ', this.props);
    let minimalEvent = null;
    if (event) {
      minimalEvent = createMinimalEvent(event);
			console.log("TCL: EventDetailPage -> render -> minimalEvent", minimalEvent)
    }
    return (
      <div style={{color: "red"}}>{minimalEvent ? minimalEvent.teams[0] : null}</div>
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
}

export default withRouter(EventDetailPage);
