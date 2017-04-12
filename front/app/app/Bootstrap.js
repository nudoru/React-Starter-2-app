import React from 'react';
import { Provider } from 'react-redux';
import { Either } from './utils/functional';
import ModalMessage from './rh-components/rh-ModalMessage';
import PleaseWaitModal from './rh-components/rh-PleaseWaitModal';
import App from './App';
import { fetchConfigData } from './services/fetchConfig';
import AppStore from './store/AppStore';
import SetConfig from'./store/actions/SetConfig';

const LoadingMessage = () =>
  <PleaseWaitModal><h1>Please wait ...</h1>
  </PleaseWaitModal>;

const ErrorMessage = () =>
  <ModalMessage message={{
    title: 'There was a problem loading the configuration.',
    icon : 'exclamation',
    error: true
  }}>
  </ModalMessage>;

const Application = () =>
  <Provider store={AppStore}>
    <App/>
  </Provider>;

class Bootstrap extends React.Component {

  constructor () {
    super();
    this.state = {
      isLoading: true,  // Loading the config.json file
      isError  : false // Error loading the file?
    };
  }

  // On initial mounting of the component, load config or start app
  componentDidMount () {
    this.fetchConfig();
  }

  // Start the app or load the configuration file
  fetchConfig () {
    fetchConfigData().fork(e => {
        this.setState({isLoading: false, isError: true});
        console.error('Error loading config file: ', e);
      },
      config => {
        AppStore.dispatch(SetConfig(config));
        this.setState({isLoading: false});
      });
  }

  render () {
    //return Either.fromBool(this.state.isLoading)
    //  .fold(
    //    () => Either.fromBool(this.state.isError)
    //      .fold(() => <Application/>,
    //        () => <ErrorMessage/>),
    //    () => <LoadingMessage/>);

    if (this.state.isLoading) {
      return <LoadingMessage/>;
    } else if (this.state.isError) {
      return <ErrorMessage/>;
    }

    return <Application/>;
  }
}

export default Bootstrap;