import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from './app/Bootstrap';

// Globally available styles
import css from './sass/index.sass';

// https://60devs.com/webpack-hot-reload-css-modules.html
/* eslint-disable no-inner-declarations */
if (module.hot) {
  const FILE_NAME = 'style.css';
  let file        = '',
        el        = document.querySelector(`link[href*="${FILE_NAME}"]`),
        {href}    = el;

  console.log('HOT!!');
  console.log(el);

  /*
  function httpGet (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => callback(xhr));
    xhr.open('GET', url);
    xhr.send();
  }

  module.hot.accept();
  module.hot.dispose(() => {
    let url = `${href}?d=${new Date().getTime()}`;

    httpGet(url, ({responseText}) => {
      console.log('d', url, responseText);
      if (responseText === file) {
        window.location.reload();// js was changed
      } else {
        el.href = url;
      }
    });
  });

  httpGet(href, ({responseText}) => {
    //console.log(href, responseText);
    file = responseText;
  });
  */
}
/* eslint-enable no-inner-declarations */


// Application container optionally loads config.json and sets up routing
ReactDOM.render(<Bootstrap />, document.querySelector('#app'));