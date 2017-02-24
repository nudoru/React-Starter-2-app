import React from 'react'

export const ToolTip = ({position, style, label, children}) => {
  let cls = ['tooltip-'+position].concat([style]);

  return (
    <span className={cls.join(' ')} aria-label={label}>{children}</span>
  )
};