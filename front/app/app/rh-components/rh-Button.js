import React from 'react';

export const ButtonHRow   = ({children}) => <div
  className="rh-button-container-horiz">{children}</div>;
export const ButtonHGroup = ({children}) => <div
  className="rh-button-group-horiz">{children}</div>;
export const ButtonVGroup = ({children}) => <div
  className="rh-button-group-vert">{children}</div>;

const NOOP = () => {
};

/*
 style = secondary, neutral, hollow
 */
const buttonMaker = ({children, style, small, text, hollow, icon, block, disabled, onClick = NOOP}) => {
  let cls = 'rh-button' + (style ? ' rh-button-' + style : '');
  if (text) {
    if(!style) {
      cls += ' rh-button';
    }
    cls += '-text';
  } else if(hollow) {
    if(!style) {
      cls += ' rh-button';
    }
    cls += '-hollow';
  }
  if (small) {
    cls += ' rh-button-small';
  }
  if(icon) {
    cls += ' rh-button-icon';
  }
  if(block) {
    cls += ' rh-button-block';
  }
  if(disabled) {
    cls += ' disabled';
    if(onClick) {
      onClick = NOOP;
    }
  }


  return <button onClick={onClick} className={cls}>{children}</button>;
};

// TODO - needs to be spread operator but ESLint give me errors

export const Button = ({children, style, small, text, hollow, icon, block, disabled, onClick}) => buttonMaker({
  style: '',
  children,
  small,
  text,
  hollow,
  icon,
  block,
  disabled,
  onClick
});

export const SecondaryButton = ({children, style, small, text, hollow, icon, block, disabled, onClick}) => buttonMaker({
  style: 'secondary',
  children,
  small,
  text,
  hollow,
  icon,
  block,
  disabled,
  onClick
});

export const NeutralButton = ({children, style, small, text, hollow, icon, block, disabled, onClick}) => buttonMaker({
  style: 'neutral',
  children,
  small,
  text,
  hollow,
  icon,
  block,
  disabled,
  onClick
});