/*
 Flexbox grid
 https://github.com/kristoferjoseph/flexboxgrid
 */

import React from 'react';

export const Grid = ({children}) => {
  // className="fxgrid-container-fluid"
  return <div>{children}</div>
};

export const Row = ({children, modifier}) => {
  let cls = 'fxgrid-row' + (modifier ? ' ' + modifier : '');
  return <div className={cls}>{children}</div>
};

export const Col = ({width = '12', children, modifier}) => {
  let cls = 'col-xs-' + width + (modifier ? ' ' + modifier : '');
  return <div className={cls}>{children}</div>
};