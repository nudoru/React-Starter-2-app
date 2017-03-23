import React from 'react';

export const VForm = ({children}) => <form
  className="rh-form-stacked">{children}</form>;

export const HForm = ({children}) => <form
  className="rh-form-inline">{children}</form>;

export const FormGroup = ({children}) => <div
  className="rh-form-group">{children}</div>;

export const FormVGroup = ({children}) => <div
  className="rh-form-input-group-stacked">{children}</div>;

export const FormHGroup = ({children}) => <div
  className="rh-form-input-group-inline">{children}</div>;

export const HInputGroup = ({children}) => <div
  className="rh-form-inline-controls">{children}</div>;

export const HInputDecorator = ({icon, children}) => <div
  className="group-addon">{icon ?
  <i className={'fa fa-' + icon}/> : null}{children}</div>;

export const FormHGroupRow = ({children, label}) => {
  let labelEl = label ?
    <label className="rh-form-inline-label">{label}</label> : null;
  return (<div className="rh-form-group">
    {labelEl}
    <HInputGroup>{children}</HInputGroup>
  </div>);
};

