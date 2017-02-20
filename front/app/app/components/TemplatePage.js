import React from 'react';
import PageModule from '../rh-components/rh-PageModule';

class TemplatePage extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
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

export default TemplatePage;