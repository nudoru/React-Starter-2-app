import React from 'react';

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
        <div className="page-container">
          <Breadcrumbs crumbs={[{label: 'Home', route: '/'}, {
            label: 'Subpage',
            route: '/one'
          }, {label: 'This page'}]}/>
        </div>
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