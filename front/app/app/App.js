import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AppStore from './store/AppStore';
import HeaderSubPage from './rh-components/rh-HeaderSubPage';
import PleaseWaitModal from './rh-components/rh-PleaseWaitModal';
import ComponentsTesting from './pages/ComponentsTesting';
import TemplatePage from './pages/TemplatePage';

// Just a test route
const Hello = () => <h1>Hello!</h1>;

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
      let {config} = this.props;

      // content = <LoginPanel/>;
      content = (
        <Router>
          <div>
            <HeaderSubPage title={config.setup.title}
                           secondaryNav={config.setup.secondaryNav}
                           username='Joe User'/>
            <Switch>
              <Route exact path="/" component={ComponentsTesting}/>
              <Route path="/template" component={TemplatePage}/>
              <Route path="/hello" component={Hello}/>
              <Route render={() => <h1>Nothing here</h1>}/>
            </Switch>
          </div>
        </Router>
      );
    }

    return content;
  }
}

App.propTypes = {};

const mapStateToProps = (state) => {
  return {
    config: state.config
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
