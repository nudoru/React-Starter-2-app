import {createStore} from 'redux';
import DefaultReducer from './DefaultReducer';
import DefaultState from './DefaultState';

// Debugging for Redux-devtools-extension for Chrome
// https://github.com/zalmoxisus/redux-devtools-extension#usage

/* eslint-disable no-underscore-dangle */
const AppStore = createStore(DefaultReducer, DefaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export default AppStore;