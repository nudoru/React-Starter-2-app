import React from 'react';

class ButtonGroup extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<div className="rh-buttongroup">
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

ButtonGroup.defaultProps = {};
ButtonGroup.propTypes    = {
  nav: React.PropTypes.array
};

export default ButtonGroup;