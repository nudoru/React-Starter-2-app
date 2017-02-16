import React from 'react';
import AppState from '../state/AppState';
import HeaderSubPage from './HeaderSubPage';
import {PleaseWaitModal} from './PleaseWaitModal';
import ComponentsTesting from './ComponentsTesting';

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
      content      = (<div>
        <HeaderSubPage title={AppState.getState().config.setup.title}
                       secondaryNav={AppState.getState().config.setup.secondaryNav}
                       username='Joe User'/>
        <ComponentsTesting/>
      </div>);
    }

    return content;
  }
}

App.propTypes = {};

export default App;