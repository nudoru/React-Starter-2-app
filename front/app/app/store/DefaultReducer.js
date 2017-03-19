import DefaultState from './DefaultState';

const DefaultReducer = (state = DefaultState, action) => {
  // console.log('Reducer',state, action);

  switch (action.type) {
    case 'SET_CONFIG':
      state.config = action.config;
      break;
    default:
      break;
  }
  return state;
};

export default DefaultReducer;