import React from 'react';
import PropTypes from 'prop-types';
import './EventInfo.scss';
import { Link } from 'react-router-dom';

const eventInfo = (props) => {
  const listClasses = `EventInfo-tile ${props.isTall ? 'tall' : ''}`;
  console.log('props', props.event.state);
  return (
    <li className={listClasses}>
      <Link to={`/event-detail/${props.event.id}`}>
        <div className="link-overlay"></div>
      </Link>
      <div className="info-container">
        <div className="category-container">
          <div className="category-text-container">
            <span className="category-text">{props.event.sport}</span><span className="separator">&gt;</span><span className="category-text">{props.event.competition}</span>
          </div>
          {props.event.state && <div className="event-state">
            <span className="state-text">{props.event.state}</span>
          </div>}
        </div>
        <div className="info-title">
          {props.event.teams && <div className="teams">
            <div className="team">
              <span className="team-name">{props.event.teams[0]}</span>
            </div>
            <div className="team">
              <span className="team-name">{props.event.teams[1]}</span>
            </div>
          </div>
          }
          {props.event.score && <div className="scores">
            {/* TO BE TESTED DURING A LIVE EVENT */}
          </div>}
        </div>
        <div className="event-date">
          Start date: {props.event.startTime}
        </div>
      </div>
    </li>
  );
};

eventInfo.propTypes = {
  event: PropTypes.object,
  isTall: PropTypes.bool
};

export default eventInfo;
