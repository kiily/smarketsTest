import React from 'react';
import logo from '../../logo.svg';

import './Header.scss';

const header = () => {
  return (
    <header className="Header">
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
};

export default header;
