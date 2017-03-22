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
const buttonMaker = ({children, style, isSmall, isText, isHollow, isIcon, isBlock, isDisabled, onClick = NOOP}) => {
  let cls = 'rh-button' + (style ? ' rh-button-' + style : '');
  if (isText) {
    if(!style) {
      cls += ' rh-button';
    }
    cls += '-text';
  } else if(isHollow) {
    if(!style) {
      cls += ' rh-button';
    }
    cls += '-hollow';
  }
  if (isSmall) {
    cls += ' rh-button-small';
  }
  if(isIcon) {
    cls += ' rh-button-icon';
  }
  if(isBlock) {
    cls += ' rh-button-block';
  }
  if(isDisabled) {
    cls += ' disabled';
    if(onClick) {
      onClick = NOOP;
    }
  }


  return <button onClick={onClick} className={cls}>{children}</button>;
};

// TODO - needs to be spread operator but ESLint give me errors

export const Button = ({children, style, isSmall, isText, isHollow, isIcon, isBlock, isDisabled, onClick}) => buttonMaker({
  style: '',
  children,
  isSmall,
  isText,
  isHollow,
  isIcon,
  isBlock,
  isDisabled,
  onClick
});

export const SecondaryButton = ({children, style, isSmall, isText, isHollow, isIcon, isBlock, isDisabled, onClick}) => buttonMaker({
  style: 'secondary',
  children,
  isSmall,
  isText,
  isHollow,
  isIcon,
  isBlock,
  isDisabled,
  onClick
});

export const NeutralButton = ({children, style, isSmall, isText, isHollow, isIcon, isBlock, isDisabled, onClick}) => buttonMaker({
  style: 'neutral',
  children,
  isSmall,
  isText,
  isHollow,
  isIcon,
  isBlock,
  isDisabled,
  onClick
});