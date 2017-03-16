import React from 'react';
import AppState from '../state/AppState';
import HeaderSubPage from '../rh-components/rh-HeaderSubPage';
import PleaseWaitModal from '../rh-components/rh-PleaseWaitModal';
import ComponentsTesting from './pages/ComponentsTesting';

class App extends React.Component {

  constructor() {
    super();
    this.state = {ready: true}
  }

  componentDidMount() {
  }

  render() {
    let content = <PleaseWaitModal
      message="Loading something ..."/>;

    if (this.state.ready) {
      let {config} = AppState.getState();

      // content = <LoginPanel/>;
      content = (<div>
        <HeaderSubPage title={config.setup.title}
                       secondaryNav={config.setup.secondaryNav}
                       username='Joe User'/>
        <ComponentsTesting/>
      </div>);
    }

    return content;
  }
}

App.propTypes = {};

export default App;