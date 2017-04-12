import React from 'react';
import {connect} from 'react-redux';
import PageModule from '../rh-components/rh-PageModule';

class TemplatePage extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  /*
  this.props.history
   - action, createHref, go, goBack, goForward, listen passed from React-Router
  this.props.location
    - hash, key, pathname, search passed from React-Router
  this.props.match
     - isExact, params, path, url passed from React-Router
   */
  componentDidMount() {
    console.log('Template page, ',this.props)
  }

  render() {
    return (
      <div>
        <PageModule>
          <h1>Header</h1>
          <p>Text</p>
        </PageModule>
      </div>);
  }
}

TemplatePage.defaultProps = {};
TemplatePage.propTypes    = {};

const mapStateToProps = state => {
  return {
    config: state.config
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplatePage);