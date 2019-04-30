import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Landing from './containers/Landing/Landing';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';

const app = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Landing />
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
};

export default app;
