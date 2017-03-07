import React from 'react';
import IconCircle from '../rh-components/rh-IconCircle';

const NOOP = () => {
};

class Panel extends React.Component {

  render() {
    let panelClass = ['rh-panel'],
        headerIcon = this.props.icon ? <div className="icon"><i className={'fa fa-'+this.props.icon} /></div> : null;

    /*
     {this.props.icon ? <IconCircle icon={this.props.icon}/> : null}
     {this.props.title ? <h1>{this.props.title}</h1> : null}
     */

    return <div className={panelClass.join(' ')}>
      <div className="rh-panel-header">
        {headerIcon}
        <h1>{this.props.title}</h1>
      </div>
      <div className="rh-panel-content">
        {this.props.children}
      </div>
      <div className="rh-panel-footer">
        <h1>{this.props.footerNote}</h1>
      </div>
    </div>;
  }
}

Panel.defaultProps = {
  title  : null,
  footerNote  : null,
  buttons: [],
  icon   : null
};

Panel.propTypes = {
  title  : React.PropTypes.string,
  footerNote  : React.PropTypes.string,
  icon   : React.PropTypes.string,
  buttons: React.PropTypes.array
};

export default Panel;