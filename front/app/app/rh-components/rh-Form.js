import React from 'react';

//------------------------------------------------------------------------------
// Groups
//------------------------------------------------------------------------------

export const VForm = ({children}) => <form
  className="rh-form-stacked">{children}</form>;

export const HForm = ({children}) => <form
  className="rh-form-inline">{children}</form>;

export const Fieldset = ({legend, children}) => {
  return (
    <fieldset>
      {legend ? <legend>{legend}</legend>:null}
      {children}
    </fieldset>
  );
};

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

//------------------------------------------------------------------------------
// Elements
//------------------------------------------------------------------------------

export const Label = ({children, htmlFor, ...other}) => <label htmlFor={htmlFor} {...other}>{children}</label>;
// TODO other input types
export const TextInput = ({children, name, ...other}) => <input type='text' name={name} {...other}></input>;
export const Datalist = ({children, name, ...other}) => <datalist name={name} {...other}></datalist>;
export const DatalistOption = ({value, ...other}) => <option value={value} {...other}/>;
export const TextArea = ({children, name, ...other}) => <textarea name={name} {...other}></textarea>;
export const Select = ({children, name, ...other}) => <select name={name} {...other}></select>;
export const SelectOptionGroup = ({children, label, ...other}) => <optgroup label={label} {...other}>{children}</optgroup>;
export const SelectOption = ({children, value, ...other}) => <option value={value} {...other}>{children}</option>;
export const Checkbox = ({label, children, name, value, ...other}) => <Label htmlFor={name}><input type='checkbox' name={name} value={value} {...other}></input>{label}</Label>;
export const Radio = ({label, children, name, value, ...other}) => <Label htmlFor={name}><input type='radio' name={name} value={value} {...other}></input>{label}</Label>;