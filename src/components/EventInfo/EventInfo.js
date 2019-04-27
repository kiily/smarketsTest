import React from 'react';
import PropTypes from 'prop-types';
import './EventInfo.scss';

const eventInfo = (props) => {

  return (
    <li className="EventInfo-tile">
      <div className="info-container">
        <div className="category-container">
          <span className="category-text">{props.sport}</span> &gt; <span className="category-text">{props.competition}</span>
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
      </div>
    </li>
  );
};

eventInfo.propTypes = {
  sport: PropTypes.string,
  competition: PropTypes.string,
  score: PropTypes.array,
  teams: PropTypes.array
};

export default eventInfo;
