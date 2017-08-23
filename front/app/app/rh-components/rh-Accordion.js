import React from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import { is } from 'ramda';

const isString = (str) => is(String, str);

/**
 * The title prop can either be a string or another components (single line of text)
 */
class Accordion extends React.Component {

  constructor (props) {
    super(props);
    this.state = {active: props.active};
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.active !== this.props.active) {
      this.setState({active: nextProps.active});
    }
  }

  _onTitleClick () {
    this.setState({active: !this.state.active});
  }

  render () {
    let contentHeight = this.state.active ? 'auto' : 0,
        icon          = this.state.active ? 'chevron-down' : 'chevron-right',
        title         = isString(this.props.title) ?
          <h1>{this.props.title}</h1> : this.props.title,
        clsName       = 'rh-accordion ' + this.props.className;

    return (<section className={clsName}>
      <div className="rh-panel-header"
           onClick={this._onTitleClick.bind(this)}>
        <div className="rh-panel-header-icon"><i className={'fa fa-' + icon}/>
        </div>
        <div className="rh-panel-header-label">
          {title}
        </div>
      </div>
      <AnimateHeight
        duration={250}
        height={contentHeight}
        contentClassName={'rh-panel-content'}>
        {this.state.active ? this.props.children : <div/>}
      </AnimateHeight>

    </section>);
  }
}

Accordion.defaultProps = {
  title    : 'Accordion Title',
  active   : false,
  className: ''
};
Accordion.propTypes    = {
  title    : PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  active   : PropTypes.bool,
  className: PropTypes.string
};

export default Accordion;

export const AccordionVGroup = ({children}) => <div
  className="rh-accordion-vgroup">{children}</div>;