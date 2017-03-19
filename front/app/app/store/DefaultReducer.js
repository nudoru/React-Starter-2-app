import {combineReducers} from 'redux';

import DefaultState from './DefaultState';
import Actions from './actions/Actions';

const config = (config = DefaultState.config, action) => {
  switch (action.type) {
    case Actions.SET_CONFIG:
      // Should be return {...action.config}
      return action.config;
  }
  return config;
};

const DefaultReducer = combineReducers({config});

export default DefaultReducer;