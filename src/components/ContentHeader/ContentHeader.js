import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './ContentHeader.scss';

const ContentHeader = (props) => {
  const [ favoriteState, setFavoriteState ] = useState({
    favorite: false
  });

  let favoriteClass = 'favorite-button ';
  if (favoriteState.favorite) {
    favoriteClass += 'favorite';
  }

  const onFavoriteClick = () => {
    setFavoriteState({
      favorite: !favoriteState.favorite
    });
  };

  const currentSportText = `${props.currentSport.charAt(0).toUpperCase()}${props.currentSport.slice(1)}`;
  return (
    <div className="ContentHeader-content">
      <h1 className="title">{currentSportText} odds
        <button className={favoriteClass} onClick={onFavoriteClick}>
          <FontAwesomeIcon icon={faStar}/>
        </button>
      </h1>
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

ContentHeader.propTypes = {
  currentSport: PropTypes.string
};

export default ContentHeader;
