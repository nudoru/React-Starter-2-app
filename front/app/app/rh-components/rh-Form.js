import React from 'react';
import { getNextId } from '../utils/ElementIDCreator';

const NOOP = () => {
};

//------------------------------------------------------------------------------
// Groups
//------------------------------------------------------------------------------

export const VForm = ({children}) => <form
  className="rh-vform">{children}</form>;

export const HForm = ({children}) => <form
  className="rh-hform">{children}</form>;

export const Fieldset = ({legend, children}) => {
  return (
    <fieldset>
      {legend ? <legend>{legend}</legend> : null}
      {children}
    </fieldset>
  );
};

export const FormGroup = ({children}) => <div
  className="rh-form-group">{children}</div>;

export const FormVGroup = ({children, label}) => {
  return (<div className="rh-form-v-group">
      {label ? <Label>{label}</Label> : null}
      <div className="rh-form-v-group-controls">{children}</div>
    </div>
  );
};

export const FormHGroup = ({children, label}) => {
  return (<div className="rh-form-h-group">
      {label ? <Label>{label}</Label> : null}
      <div className="rh-form-h-group-controls">{children}</div>
    </div>
  );
};

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

//https://hackernoon.com/10-react-mini-patterns-c1da92f068c5#.jnip3uvdo

export const Label = ({children, htmlFor, ...other}) => <label
  htmlFor={htmlFor} {...other}>{children}</label>;

export const Help = ({children}) => <span
  className="rh-form-help">{children}</span>;

//------------------------------------------------------------------------------

export class TextInput extends React.Component {

  constructor (props) {
    super(props);
    this.id = getNextId();
  }

  focus () {
    this.el.focus();
  }

  render () {
    let {label, help, datalist, error, className='', ...other} = this.props;

    if (error) {
      className += ' isError';
    }

    return (<div className="rh-form-component">
        {label ? <Label htmlFor={this.id}>{label}</Label> : null }
        <div className="rh-form-control">
          <input
            type='text'
            id={this.id}
            list={this.id}
            ref={el => { this.el = el; }} //eslint-disable-line brace-style
            className={className}
            {...other}>
          </input>
          {datalist ? (
            <Datalist id={this.id}>
              {datalist.split(',').map(d => <DatalistOption value={d}/>)}
            </Datalist>
          ) : null}
          {help ? <Help>{help}</Help> : null}
        </div>
      </div>
    );
  }
}

// TODO better implemention https://www.noupe.com/design/html5-datalists-what-you-need-to-know-78024.html
export const Datalist = ({children, id, ...other}) => <datalist
  id={id} {...other}>{children}</datalist>;

export const DatalistOption = ({value, children, ...other}) => <option
  value={value}>{children}</option>;

//------------------------------------------------------------------------------

export class TextArea extends React.Component {

  constructor (props) {
    super(props);
    this.id = getNextId();
  }

  focus () {
    this.el.focus();
  }

  render () {
    let {label, children, error, className='', help, ...other} = this.props;

    if (error) {
      className += ' isError';
    }

    return (<div className="rh-form-component">
        {label ? <Label htmlFor={this.id}>{label}</Label> : null }
        <div className="rh-form-control">
          <textarea
            id={this.id}
            ref={el => { this.el = el; }} //eslint-disable-line brace-style
            className={className}
            {...other}>
            {children}
          </textarea>
          {help ? <Help>{help}</Help> : null}
        </div>
      </div>
    );
  }
}

//------------------------------------------------------------------------------

export class DropDown extends React.Component {

  constructor (props) {
    super(props);
    this.id = getNextId();
  }

  focus () {
    this.el.focus();
  }

  render () {
    let {label, children, error, className='', help, ...other} = this.props;

    if (error) {
      className += ' isError';
    }

    return (<div className="rh-form-component">
        {label ? <Label htmlFor={this.id}>{label}</Label> : null }
        <div className="rh-form-control">
          <select
            id={this.id}
            ref={el => { this.el = el; }} //eslint-disable-line brace-style
            className={className}
            {...other}>
            {children}
          </select>
          {help ? <Help>{help}</Help> : null}
        </div>
      </div>
    );
  }
}

export class ListBox extends React.Component {

  constructor (props) {
    super(props);
    this.id = getNextId();
  }

  focus () {
    this.el.focus();
  }

  render () {
    let {label, children, error, className='', help, ...other} = this.props;

    className = 'rh-form-control-listbox '+className;

    if (error) {
      className += ' isError';
    }

    return (<div className="rh-form-component">
        {label ? <Label htmlFor={this.id}>{label}</Label> : null }
        <div className="rh-form-control">
          <select
            multiple
            size="3"
            id={this.id}
            ref={el => { this.el = el; }} //eslint-disable-line brace-style
            className={className}
            {...other}>
            {children}
          </select>
          {help ? <Help>{help}</Help> : null}
        </div>
      </div>
    );
  }
}

export const OptionGroup = ({children, label, ...other}) => <optgroup
  label={label} {...other}>{children}</optgroup>;

export const Option = ({children, value, ...other}) => <option
  value={value} {...other}>{children}</option>;

//------------------------------------------------------------------------------

export class CheckGroup extends React.Component {

  constructor (props) {
    super(props);
    this.id = getNextId();
  }

  focus () {
    this.el.focus();
  }

  render () {
    let {label, children, error, className='', help, disabled} = this.props;

    if (error) {
      className += ' isError';
    }

    children.forEach(c => c.props.className = className);

    if (disabled) {
      children.forEach(c => c.props.disabled = true);
    }

    return (<div className="rh-form-component">
        {label ? <Label htmlFor={this.id}>{label}</Label> : null }
        <div className="rh-form-control">
          {children}
          {help ? <Help>{help}</Help> : null}
        </div>
      </div>
    );
  }
}

export const Checkbox = ({children, value, className, ...other}) => {
  let id = getNextId();
  return (<Label htmlFor={id} className={className}>
    <input type='checkbox' id={id} value={value} {...other}></input>
    {children}
  </Label>);
};

//------------------------------------------------------------------------------

export class RadioGroup extends React.Component {

  constructor (props) {
    super(props);
    this.id = getNextId();
  }

  focus () {
    this.el.focus();
  }

  render () {
    let {label, children, error, className='', disabled, help} = this.props;

    if (error) {
      className += ' isError';
    }

    children.forEach(c => c.props.className = className);

    // Assign the same name so they group properly
    children.forEach(c => c.props.name = this.id);

    if (disabled) {
      children.forEach(c => c.props.disabled = true);
    }

    return (<div className="rh-form-component">
        {label ? <Label htmlFor={this.id}>{label}</Label> : null }
        <div className="rh-form-control">
          {children}
          {help ? <Help>{help}</Help> : null}
        </div>
      </div>
    );
  }
}

export const Radio = ({children, name, value, className, ...other}) => {
  let id = getNextId();
  return (<Label className={className} htmlFor={id}>
    <input type='radio' name={name} id={id} value={value} {...other}></input>
    {children}
  </Label>);
};