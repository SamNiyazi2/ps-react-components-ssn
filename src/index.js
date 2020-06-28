import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// 06/28/2020 05:54 am - SSN - [20200627-0056] - [007] - M04 - Documentation - Creating Docs components
// import App from './App';
import Docs from './docs/Docs';

// 06/28/2020 12:15 pm - SSN - [20200628-1215] - [001] - M04 - Documentation -  Syntax highlighting
import '../node_modules/highlight.js/styles/ocean.css';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Docs/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
