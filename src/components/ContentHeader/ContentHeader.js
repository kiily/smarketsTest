import React from 'react';
import PropTypes from 'prop-types';
import './ContentHeader.scss';

const contentHeader = (props) => {
  const currentSportText = `${props.currentSport.charAt(0).toUpperCase()}${props.currentSport.slice(1)}`;
  return (
    <div className="ContentHeader-content">
      <h1 className="title">{currentSportText} odds</h1>
      <p className="description">
        <span>
            Smarkets betting exchange allows you to bet with the best <span>{currentSportText}</span>
            odds - thanks to our small margins and industry-low 2% commission - on all tournaments and competitions
          {props.currentSport === 'football' && <span> including Premier League, La Liga, Europa League and Champions League.</span>}
        </span>
      </p>
    </div>
  );
};

contentHeader.propTypes = {
  currentSport: PropTypes.string
};

export default contentHeader;
