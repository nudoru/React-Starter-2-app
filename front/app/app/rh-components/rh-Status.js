import React from 'react';

export const Status = ({type, children}) => {
  let cls = 'rh-status', icon;

  if (type) {
    cls += '-' + type;
  }

  switch (type) {
    case 'info':
      icon = 'info';
      break;
    case 'pass':
      icon = 'check';
      break;
    case 'warning':
      icon = 'exclamation-triangle';
      break;
    case 'fail':
      icon = 'times';
      break;
    default:
      icon = 'circle-o';
  }


  return (<div className={cls}>
    <div className="icon">
      <i className={"fa fa-" + icon} />
    </div>
    <div className="message">{children}</div>
  </div>);
};

export const StatusLabel = ({type, children}) => {
  let cls = 'rh-status-label', icon;

  if (type) {
    cls += '-' + type;
  }

  switch (type) {
    case 'info':
      icon = 'info';
      break;
    case 'pass':
      icon = 'check';
      break;
    case 'warning':
      icon = 'exclamation-triangle';
      break;
    case 'fail':
      icon = 'times';
      break;
    default:
      icon = 'circle-o';
  }


  return (<div className={cls}>
    <div className="icon">
      <i className={"fa fa-" + icon} />
    </div>
    <div className="message">{children}</div>
  </div>);
};