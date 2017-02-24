import React from 'react';

export const Spinner = ({type}) => {
  let cls = ['spinner'];

  if(type) {
    cls.push(type);
  }

  return (<div className={cls.join(' ')}></div>)
};