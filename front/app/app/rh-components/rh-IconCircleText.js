import React from 'react';

const IconCircleText = ({label, style}) => {
  let cls = 'rh-icon-circle-text';

  if (style) {
    cls += '-' + this.props.style;
  }

  return (<div className={cls}>
    <span>{label}</span>
  </div>);
};

export default IconCircleText;