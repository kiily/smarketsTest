import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Landing from './containers/Landing/Landing';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Landing/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
