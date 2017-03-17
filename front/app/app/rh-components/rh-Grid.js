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

export const Col = ({width, children, modifier}) => {
  let cls = 'col-xs';
  if(width) {
    cls += '-' + width;
  }
  if(modifier) {
     cls += ' ' + modifier;
  }
  return <div className={cls}>{children}</div>
};