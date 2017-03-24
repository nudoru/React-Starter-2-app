import Actions from './Actions';

const SetConfig = (config)  => {
  return {
    type: Actions.SET_CONFIG,
    config
  };
};

export default SetConfig;

