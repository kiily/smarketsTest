import React from 'react';
import logo from '../../logo.svg';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const header = (props) => {
  return (
    <header className="Header">
      <button className="button-custom" onClick={props.toggleLinks}>
        <FontAwesomeIcon icon={faBars}/>
      </button>
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
};

header.propTypes = {
  toggleLinks: PropTypes.func
};

export default header;
