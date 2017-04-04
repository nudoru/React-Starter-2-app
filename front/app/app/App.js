import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { resetId } from './utils/ElementIDCreator';
import Header from './rh-components/rh-Header';
import Footer from './rh-components/rh-Footer';
import PleaseWaitModal from './rh-components/rh-PleaseWaitModal';
import PageModule from './rh-components/rh-PageModule';

import ComponentsTesting from './pages/ComponentsTesting';
import FormTesting from './pages/FormTesting';
import TemplatePage from './pages/TemplatePage';

import PortalHome from './pages/portal/PortalHome';
import PortalMyPage from './pages/portal/PortalMyPage';
import PortalChannels from './pages/portal/PortalChannels';
import PortalChannelPage from './pages/portal/PortalChannelPage';

const LoadingMessage = () => <PleaseWaitModal><h1>Reticulating splines ...</h1></PleaseWaitModal>;

const RouteMessage = ({children}) => <div>
                                      <PageModule>
                                        <h1>{children}</h1>
                                        <p>Text</p>
                                      </PageModule>
                                    </div>;

const AppHeader = ({config}) => <Header title={config.setup.title}
                                         secondaryNav={config.setup.secondaryNav}
                                         username='Joe User'
                                         nav={[
                                           {label: 'Home', route: '/'},
                                           {label: 'My Page', route: '/mypage'},
                                           {label: 'Channels', route: '/channels'},
                                           {label: 'Regions', route: '/baz'},
                                           {label: 'Course Catalog', route: '/foo'},
                                           {label: 'Global Calendar', route: '/bar'},
                                           {label: 'New Hire', route: '/channelpage'}
                                           //{label: 'Components', route: '/c'},
                                           //{label: 'Form', route: '/f'},
                                           //{label: 'Template', route: '/t'}
                                         ]}/>;

const AppRouter = ({config}) => <Router>
                          <div className="application-container">
                            <AppHeader config={config} />
                            <div className="application-content">
                              <Switch>
                                <Route exact path="/" component={PortalHome}/>
                                <Route path="/channels" component={PortalChannels}/>
                                <Route path="/channelpage" component={PortalChannelPage}/>
                                <Route path="/mypage" component={PortalMyPage}/>
                                <Route path="/c" component={ComponentsTesting}/>
                                <Route path="/f" component={FormTesting}/>
                                <Route path="/t" component={TemplatePage}/>
                                <Route render={() => <h1>There's nothing here.</h1>}/>
                              </Switch>
                            </div>
                            <Footer />
                          </div>
                        </Router>;

class App extends React.Component {

  constructor () {
    super();
    this.state = {ready: true};
    this.storeListener;
  }

  componentDidMount () {
    //this.storeListener = AppStore.subscribe(() => console.log('Action'));
  }

  render () {
    resetId(); // Reset IDs for form element ID generator

    let content = <LoadingMessage/>;

    if (this.state.ready) {
      let {config} = this.props;
      content = <AppRouter config={config}/>;
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

/*
 const LoginPanelPrompt = () => <LoginPanel
 title="Please enter your Kerberos ID to continue."
 prompt="You must be connected to the corporate network or VPN to access."
 inputLabel="@redhat.com"
 buttonLabel="Continue"
 validateFn={this.validateLoginInput.bind(this)}
 processLoginFn={this.handleLogin.bind(this)}
 />;

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
 */