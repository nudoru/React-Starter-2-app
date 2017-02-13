import React from 'react';

class Breadcrumbs extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <ul className="rh-breadcrumbs">
        {
          this.props.crumbs.map((item, i) => {
            let crumb = item.route ? (
              <li key={i}><a href={item.route}>{item.label}</a></li>) :
              (<li key={i}>{item.label}</li>);
            return crumb;
          })
        }
      </ul>
    );
  }
}

Breadcrumbs.propTypes = {
  crumbs: React.PropTypes.array
};

export default Breadcrumbs;