import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppFrame from './AppFrame';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <AppFrame />
  </BrowserRouter>
  ),
  document.getElementById('root'),
);
