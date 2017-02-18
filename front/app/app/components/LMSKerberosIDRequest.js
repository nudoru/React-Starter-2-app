import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ModalMessage from '../rh-components/rh-ModalMessage'
import IconCircle from '../rh-components/rh-IconCircle'
import AppState from '../state/AppState';
// import {fetchUserProfile} from '../state/fetchLMS';
import {validateInputStr} from '../utils/AppUtils';
import {Spinner} from '../rh-components/rh-Spinner';

class LMSKerberosIDRequest extends React.Component {

  constructor() {
    super();
    this.state = {
      isPrompting  : true,
      isFetching   : false,
      isWSError    : false,
      isInputError : false,
      usernameInput: '',
      lastRequest  : ''
    };
  }

  componentDidMount() {
    this.refs.emailInput.focus();
  }

  onEmailInputChange(e) {
    let userinput = this.refs.emailInput.value;
    this.setState({
      isInputError : validateInputStr(userinput),
      usernameInput: userinput
    });
  }

  onContinueClick(e) {
    e.preventDefault();
    let userinput = this.refs.emailInput.value;

    if (this.state.isInputError || userinput.length === 0) {
      console.warn('Invalid id');
      return false;
    }

    AppState.setState({config: {defaultuser: userinput + '@redhat.com'}});
    this.getUser();
  }

  getUser() {
    /*this.setState({
     isFetching : true,
     isWSError  : false,
     isPrompting: false,
     lastRequest: this.refs.emailInput.value
     });
     fetchUserProfile().fork(err => {
     console.warn('GetUserInformation, WS error, probably could not find user id');
     this.setState({isFetching: false, isWSError: true, isPrompting: true});
     }, () => {
     // Don't need to do anything here since ApplicationContainer has a listener
     // on the AppState and picks up that the user profile key was set. It then
     // renders App and removes this view
     return;
     });*/
  }

  render() {
    let {isPrompting, isFetching, isWSError, isInputError, usernameInput, lastRequest} = this.state, content;

    if (isPrompting) {
      let err, buttonStyles = ['rh-button'];

      if (isWSError) {
        err =
          <p className="login-error padding-top">There was problem getting
            the profile for <strong>{lastRequest}</strong>! Please check your
            spelling and try
            again.</p>;
      } else if (isInputError) {
        err =
          <p className="login-error padding-top">That doesn't look like a valid
            ID.</p>;
      }

      if (isInputError || usernameInput.length === 0) {
        buttonStyles.push('disabled');
      }

      content = (<div>
        <form className="rh-form">
          <h1>Please enter your Kerberos ID to continue.</h1><p>You must be
          connected to the corporate network or VPN to access.</p>
          <form className="rh-form-inline">
            <fieldset>
              <div className="rh-form-group text-center">
                <div className="rh-form-input-group-inline text-center">
                  <span className="group-addon"><i className="fa fa-user"/></span>
                  <input ref="emailInput" type="text" maxLength="30"
                         defaultValue={this.state.usernameInput}
                         onInput={this.onEmailInputChange.bind(this)}/>
                </div>
              </div>
            </fieldset>
          </form>
          {err}
          <button
            className={buttonStyles.join(' ')}
            onClick={this.onContinueClick.bind(this)}>Continue
          </button>
        </form>
      </div>);
    } else if (isFetching) {
      content = (<div><h1>Loading your profile ...</h1>
        <div className="text-center">
          <Spinner/>
        </div>
      </div>)
    }

    return (
      <ReactCSSTransitionGroup transitionName="modal"
                               transitionAppear={true}
                               transitionAppearTimeout={1000}
                               transitionEnterTimeout={1000}
                               transitionLeaveTimeout={1000}>
        <ModalMessage dismissible={false} error={isWSError || isInputError}>
          <div className="rh-login">
            <IconCircle icon="user"/>
            {content}
          </div>
        </ModalMessage>
      </ReactCSSTransitionGroup>);
  }
}

LMSKerberosIDRequest.defaultProps = {};
LMSKerberosIDRequest.propTypes    = {};

export default LMSKerberosIDRequest;