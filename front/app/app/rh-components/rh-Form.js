import React from 'react';

export const FormStacked = ({children}) => <form className="rh-form-stacked">{children}</form>;

export const FormInline = ({children}) => <form className="rh-form-inline">{children}</form>;

export const Group = ({children}) => <div className="rh-form-group">{children}</div>;

export const InputsStacked = ({children}) => <div className="rh-form-input-group-stacked">{children}</div>;

export const InputsInline = ({children}) => <div className="rh-form-input-group-inline">{children}</div>;

export const InputInlineIcon = ({icon}) => <div className="group-addon"><i className={"fa fa-"+icon}/></div>;

export const InputInlinePhase = ({phrase}) => <div className="group-addon">{phrase}</div>;

export const InlineGroup = ({children, label}) => {
  let labelEl = label ? <label className="rh-form-inline-label">{label}</label> : null;
  return (<div className="rh-form-group">
    {labelEl}
    <div className="rh-form-inline-controls">
      {children}
    </div>
  </div>)
};