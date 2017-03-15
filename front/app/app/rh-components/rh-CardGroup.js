import React from 'react';

const CardGroup = ({orientation = 'horizontal', children}) => {
  orientation = 'rh-card-container-' + orientation;
  return (<div className={orientation}>{children}</div>);
};

export default CardGroup;