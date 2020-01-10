import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import './animations.css';
import App from './App';
import Footer from './containers/Footer'

const components = {
  app: App,
  footer: Footer
}

document.querySelectorAll('.reactEntryPoint').forEach(entryPoint => {
  const { chart } = entryPoint.dataset
  const Comp = components[chart]
  console.log(chart);
  ReactDOM.render(<Comp />, entryPoint);
})

// ReactDOM.render(<App />, document.getElementById('lisie'));

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('./service-worker.js')
//     .then(function () { console.log('Service Worker v1.0 Registered'); });
// }