import React from 'react';

class Tabs extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<div className="rh-tabs">
      <ul>
        {
          this.props.nav.map((item, i) => {
            return <li key={i} className={item.active === true ? 'active' : ''}>
              <a href={item.route}>{item.label}</a></li>
          })
        }
      </ul>
    </div>);
  }
}

Tabs.defaultProps = {};
Tabs.propTypes    = {
  nav: React.PropTypes.array
};

export default Tabs;