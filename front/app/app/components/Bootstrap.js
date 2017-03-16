import React from 'react';
import ModalMessage from '../rh-components/rh-ModalMessage';
import PleaseWaitModal from '../rh-components/rh-PleaseWaitModal';
import App from './App';
import {fetchConfigData} from '../state/fetchConfig';

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
      c => {
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
      loadingContent = (<ModalMessage message={{title: 'There was a problem loading the configuration.', icon: 'exclamation', error: true}}>
      </ModalMessage>);
    }

    if (loadingContent) {
      return loadingContent;
    }

    return <App/>;
  }
}

export default Bootstrap