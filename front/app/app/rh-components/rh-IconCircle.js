import React from 'react';

const IconCircle = ({icon, center}) => {
  let cls = ['rh-icon-circle-icon'];
  if(center) {
    cls.push('margin-center');
  }
  return <div className={cls.join(' ')}><i className={'fa fa-' + icon}></i></div>;
}

export default IconCircle;