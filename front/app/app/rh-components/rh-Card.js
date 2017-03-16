import React from 'react';
import IconCircle from './rh-IconCircle';

export const CardHGroup = ({children}) => <div
  className='rh-card-container-horizontal'>{children}</div>;

export const CardHGroupDecorative = ({children}) => <div
  className='rh-card-container-horizontal-decorative'>{children}</div>;

export const CardHGroupTable = ({children}) => <div
  className='rh-card-container-horizontal-table'>{children}</div>;

export const CardVGroup = ({children}) => {
  return (<div className='rh-card-container-vertical'>{children}</div>);
};

export const Card = ({
  style = 'light',
  title,
  cta = 'Read more',
  ctaLink, children
}) => {

  let headerArea = title ? (<div className="rh-card-header">
          <h1>{title}</h1>
        </div>) : null,
      buttonArea;

  style = 'rh-card rh-card-' + style;

  if (ctaLink) {
    buttonArea = (<div className="rh-card-footer">
      <a href={ctaLink} className="cta">{cta}</a>
    </div>)
  }

  return (<div className={style}>
    {headerArea}
    {children}
    {buttonArea}
  </div>);
};

export const CardIcon = ({
  style = 'light',
  icon,
  title,
  cta = 'Read more',
  ctaLink,
  children
}) => {

  let buttonArea = (<div></div>),
      iconArea   = icon ? (<div className="rh-card-header">
          <IconCircle icon={icon}/>
        </div>) : (<div></div>);

  style = 'rh-card rh-card-icon rh-card-' + style;

  if (ctaLink) {
    buttonArea = (<div className="rh-card-footer">
      <a href={ctaLink} className="cta">{cta}</a>
    </div>)
  }

  return (<div className={style}>
    {iconArea}
    <h1>{title}</h1>
    {children}
    {buttonArea}
  </div>);
};