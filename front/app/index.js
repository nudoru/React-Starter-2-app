import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from './app/Bootstrap'

// Polyfill fetch
require('isomorphic-fetch');

// Globally available styles
import css from './sass/index.sass';

// Application container optionally loads config.json and sets up routing
ReactDOM.render(<Bootstrap />, document.querySelector('#app'));