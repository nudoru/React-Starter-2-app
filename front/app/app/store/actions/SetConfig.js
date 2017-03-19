import Actions from './Actions';

const SetConfig = (data)  => {
  return {
    type: Actions.SET_CONFIG,
    config: data
  };
};

export default SetConfig;

