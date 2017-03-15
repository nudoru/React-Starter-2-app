import React from 'react';
import IconCircle from '../rh-components/rh-IconCircle';

const Popupsimple = ({
  title,
  error,
  buttonOnClick = () => {
  },
  buttonLabel,
  icon,
  children
}) => {

  let content,
      boxClass = ['rh-popup-simple'],
      button   = buttonLabel ? (
          <button className="rh-button" onClick={buttonOnClick}>
            {buttonLabel}</button>) : null;

  if (error) {
    boxClass.push('error');
  }

  content = <div className={boxClass.join(' ')}>
    {icon ? <IconCircle icon={icon}/> : null}
    {title ? <h1>{title}</h1> : null}
    {children}
    {button}
  </div>;

  return content;
};

export default Popupsimple;