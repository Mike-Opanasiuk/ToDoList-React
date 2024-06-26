import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/morph/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
