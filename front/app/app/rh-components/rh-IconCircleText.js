import React from 'react';

const IconCircleText = ({label, style, center}) => {
  let cls = 'rh-icon-circle-text';

  if (style) {
    cls += '-' + this.props.style;
  }

  if(center) {
   cls += ' margin-center' ;
  }

  return (<div className={cls}>
    <span>{label}</span>
  </div>);
};

export default IconCircleText;