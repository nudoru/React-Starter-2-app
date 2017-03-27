import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {resetId} from './utils/ElementIDCreator';
import AppStore from './store/AppStore';
import HeaderSubPage from './rh-components/rh-HeaderSubPage';
import Header from './rh-components/rh-Header';
import Footer from './rh-components/rh-Footer';
import PleaseWaitModal from './rh-components/rh-PleaseWaitModal';
import ComponentsTesting from './pages/ComponentsTesting';
import FormTesting from './pages/FormTesting';
import TemplatePage from './pages/TemplatePage';
import PortalHome from './pages/PortalHome';
import LoginPanel from './rh-components/rh-LoginPanel';
import { validateInputStr } from './utils/AppUtils';

// Just a test route
const Hello = () => <h1>Hello!</h1>;

class App extends React.Component {

  constructor () {
    super();
    this.state = {ready: true};
    this.storeListener;
  }

  componentDidMount () {
    //this.storeListener = AppStore.subscribe(this.listenToStore);
  }

  //listenToStore() {
  //  console.log('Store had an action');
  //}

  // For LoginPanel, validate user input
  validateLoginInput (str) {
    return validateInputStr(str);
  }

  // For LoginPanel, handle loading and validating the user ID
  handleLogin (userId, onSuccessFn, onErrorFn) {
    console.log('Login for ', userId);
    onSuccessFn();
    // onErrorFn();
  }

  render () {
    resetId(); // Reset IDs for element ID generator

    let content = <PleaseWaitModal><h1>Reticulating splines ...</h1></PleaseWaitModal>;

    if (this.state.ready) {
      let {config} = this.props;

       //content = <LoginPanel
       //  title="Please enter your Kerberos ID to continue."
       //  prompt="You must be connected to the corporate network or VPN to access."
       //  inputLabel="@redhat.com"
       //  buttonLabel="Continue"
       //  validateFn={this.validateLoginInput.bind(this)}
       //  processLoginFn={this.handleLogin.bind(this)}
       ///>;

      content = (
        <Router>
          <div className="application-container">
            <Header title={config.setup.title}
                    secondaryNav={config.setup.secondaryNav}
                    username='Joe User'
                    nav={[
                      {label: 'Home', route: '/'},
                      {label: 'Components', route: '/components'},
                      {label: 'Form', route: '/form'},
                      {label: 'Template', route: '/template'},
                      {label: 'Hello', route: '/hello'}
                    ]}/>
            <div className="application-content">
              <Switch>
                <Route exact path="/" component={PortalHome}/>
                <Route path="/components" component={ComponentsTesting}/>
                <Route path="/form" component={FormTesting}/>
                <Route path="/template" component={TemplatePage}/>
                <Route path="/hello" component={Hello}/>
                <Route render={() => <h1>Nothing here</h1>}/>
              </Switch>
            </div>
            <Footer />
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
