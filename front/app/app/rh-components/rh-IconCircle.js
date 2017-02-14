import React from 'react';

/*
Disabled, 9/8/16 Aphrodite causing errors
 import {StyleSheet, css} from 'aphrodite';
 styles     = StyleSheet.create({
 icon: {
 width       : '8rem',
 height      : '8rem',
 borderRadius: '4rem',
 background  : '#0f0',
 color       : '#0ff',
 fontSize    : '3.4rem',
 fontWeight  : 300,
 lineHeight  : '8rem',
 textAlign   : 'center'
 }
 });
 */

class IconCircle extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    let iconStyle = 'fa fa-' + this.props.icon;

    return (<div className='rh-icon-circle-icon'>
      <i className={iconStyle}></i>
    </div>);
  }
}

IconCircle.defaultProps = {
  icon      : 'cog'
};
IconCircle.propTypes    = {
  icon      : React.PropTypes.string
};

export default IconCircle;