import React from 'react';
import { render } from 'react-dom';
import App from './App';
import '../sass/main.sass';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();
