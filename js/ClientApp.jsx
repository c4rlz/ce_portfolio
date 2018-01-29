import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import '../sass/main.sass';

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
};

renderApp();
