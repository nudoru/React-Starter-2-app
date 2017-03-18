import React from 'react';
import IconCircle from './rh-IconCircle';
import {Button} from './rh-Button';

export const CardHGroup = ({children}) => <div
  className='rh-card-container-horizontal'>{children}</div>;

export const CardHGroupDecorative = ({children}) => <div
  className='rh-card-container-horizontal-decorative'>{children}</div>;

export const CardHGroupTable = ({children}) => <div
  className='rh-card-container-horizontal-table'>{children}</div>;

export const CardVGroup = ({children}) => {
  return (<div className='rh-card-container-vertical'>{children}</div>);
};

const CardHeader = ({children}) => <div className="rh-card-header">{children}</div>;
const CardFooter = ({children}) => <div className="rh-card-footer">{children}</div>;

export const Card = ({
  style = 'light',
  title,
  icon,
  children,
  onClick,
  ctaLabel = 'Read More'
}) => {

  let iconArea   = icon ? (<CardHeader>
      <IconCircle icon={icon}/>
    </CardHeader>) : null,
    headerArea = title ? (<CardHeader><h1>{title}</h1></CardHeader>) : null,
      buttonArea = onClick ? (<CardFooter><Button isHollow={true} onClick={onClick}>{ctaLabel}</Button></CardFooter>) : null;


  style = 'rh-card rh-card-' + style;

  return (<div className={style}>
    {iconArea}
    {headerArea}
    {children}
    {buttonArea}
  </div>);
};

// export const CardIcon = ({
//   style = 'light',
//   icon,
//   title,
//   cta = 'Read more',
//   ctaLink,
//   children
// }) => {
//
//   let buttonArea = (<div></div>),
//
//
//   style = 'rh-card rh-card-icon rh-card-' + style;
//
//   if (ctaLink) {
//     buttonArea = (<div className="rh-card-footer">
//       <a href={ctaLink} className="cta">{cta}</a>
//     </div>)
//   }
//
//   return (<div className={style}>
//     {iconArea}
//     <h1>{title}</h1>
//     {children}
//     {buttonArea}
//   </div>);
// };