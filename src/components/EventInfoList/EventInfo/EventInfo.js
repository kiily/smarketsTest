import React from 'react';
import PropTypes from 'prop-types';
import './EventInfo.scss';

const eventInfo = (props) => {

  const listClasses = `EventInfo-tile ${props.isTall ? 'tall' : ''}`;
  return (
    <li className={listClasses}>
      <div className="info-container">
        <div className="category-container">
          <span className="category-text">{props.sport}</span><span className="separator">&gt;</span><span className="category-text">{props.competition}</span>
        </div>
        <div className="info-title">
          {props.teams && <div className="teams">
            <div className="team">
              <span className="team-name">{props.teams[0]}</span>
            </div>
            <div className="team">
              <span className="team-name">{props.teams[1]}</span>
            </div>
          </div>
          }
          {props.score && <div className="scores">

          </div>}
        </div>
        <div className="event-date">
          Start date: {props.startTime}
        </div>
      </div>
    </li>
  );
};

eventInfo.propTypes = {
  sport: PropTypes.string,
  competition: PropTypes.string,
  score: PropTypes.array,
  teams: PropTypes.array,
  isTall: PropTypes.bool,
  startTime: PropTypes.string
};

export default eventInfo;
