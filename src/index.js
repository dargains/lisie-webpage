import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import './animations.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('lisie'));

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('./service-worker.js')
//     .then(function () { console.log('Service Worker v1.0 Registered'); });
// }