import React from 'react';
import ModalMessage from '../rh-components/rh-ModalMessage'
import App from '../components/App';
import {fetchConfigData} from '../state/fetchConfig';

class ApplicationContainer extends React.Component {

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
      loadingContent = (<ModalMessage dismissible={false}>
        <h1>Please wait ...</h1>
      </ModalMessage>);
    } else if (this.state.isError) {
      loadingContent = (<ModalMessage error={true} dismissible={false}>
        <h1>There was a problem loading the configuration.</h1>
      </ModalMessage>);
    }

    if (loadingContent) {
      return loadingContent;
    }

    return <App/>;
  }
}

export default ApplicationContainer