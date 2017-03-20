import React from 'react';
import {Provider} from 'react-redux';
import ModalMessage from './rh-components/rh-ModalMessage';
import PleaseWaitModal from './rh-components/rh-PleaseWaitModal';
import App from './App';
import {fetchConfigData} from './services/fetchConfig';
import AppStore from './store/AppStore';
import SetConfig from'./store/actions/SetConfig';

class Bootstrap extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,  // Loading the config.json file
      isError: false // Error loading the file?
    };
  }

  // On initial mounting of the component, load config or start app
  componentDidMount() {
    this.fetchConfig();
  }

  // Start the app or load the configuration file
  fetchConfig() {
    fetchConfigData().fork(console.error,
      config => {
        AppStore.dispatch(SetConfig(config));
        this.setState({loading: false});
      });
  }

  render() {
    let loadingContent;

    if (this.state.loading) {
      loadingContent = (<PleaseWaitModal>
        <h1>Please wait ...</h1>
      </PleaseWaitModal>);
    } else if (this.state.isError) {
      loadingContent = (<ModalMessage message={{
        title: 'There was a problem loading the configuration.',
        icon : 'exclamation',
        error: true
      }}>
      </ModalMessage>);
    }

    if (loadingContent) {
      return loadingContent;
    }

    return (
      <Provider store={AppStore}>
        <App/>
      </Provider>);
  }
}

export default Bootstrap;