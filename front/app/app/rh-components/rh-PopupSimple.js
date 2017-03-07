import React from 'react';
import IconCircle from '../rh-components/rh-IconCircle';

class Popupsimple extends React.Component {

  render() {
    let content,
        boxClass = ['rh-popup-simple'],
        button   = this.props.buttonLabel ? (
            <button className="rh-button" onClick={this.props.buttonOnClick}>
              {this.props.buttonLabel}</button>) : null;

    if (this.props.error) {
      boxClass.push('error');
    }

    content = this.props.children ? (
        <div className={boxClass.join(' ')}>
          {this.props.icon ? <IconCircle icon={this.props.icon}/> : null}
          {this.props.title ? <h1>{this.props.title}</h1> : null}
          {this.props.children}
          {button}
        </div>
      ) : null;

    return content;
  }
}

Popupsimple.defaultProps = {
  title        : null,
  error        : false,
  buttonOnClick: () => {
  },
  buttonLabel  : null,
  icon         : null
};

Popupsimple.propTypes = {
  title        : React.PropTypes.string,
  icon         : React.PropTypes.string,
  error        : React.PropTypes.bool,
  buttonOnClick: React.PropTypes.func,
  buttonLabel  : React.PropTypes.string
};

export default Popupsimple;