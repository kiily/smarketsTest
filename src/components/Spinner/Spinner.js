import React from 'react';
import './Spinner.scss';

const spinner = () => {
  return (
    <div className="Spinner-container">
      <span className="spinner-text">Retrieving popular events</span>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default spinner;
