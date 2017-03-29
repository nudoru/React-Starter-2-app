import React from 'react';
import IconCircle from './rh-IconCircle';
import { Button } from './rh-Button';

export const CardHGroup = ({children}) => <div
  className='rh-card-container-horizontal'>{children}</div>;

export const CardHGroupDecorative = ({children}) => <div
  className='rh-card-container-horizontal-decorative'>{children}</div>;

export const CardHGroupTable = ({children}) => <div
  className='rh-card-container-horizontal-table'>{children}</div>;

export const CardVGroup = ({children}) => {
  return (<div className='rh-card-container-vertical'>{children}</div>);
};

export const CardMasonry33Group = ({children}) => {
  return (<div className='rh-card-container-masonry-33'>{children}</div>);
};

const CardHeader = ({children}) => <div
  className="rh-card-header">{children}</div>;
const CardFooter = ({children}) => <div
  className="rh-card-footer">{children}</div>;

export const Card = ({
                       style = 'light',
                       title,
                       icon,
                       children,
                       onClick,
                       ctaLabel = 'Read More'
                     }) => {

  let needHeader = icon || title,
      titleCls,
      headerArea,
      footerArea;

  if (needHeader) {
    titleCls   = icon ? 'rh-card-title-icon' : '';
    headerArea = (
      <CardHeader>
        {icon ? <IconCircle center icon={icon}/> : null}
        {title ? <h1 className={titleCls}>{title}</h1> : null}
      </CardHeader>
    );
  }

  if (onClick) {
    footerArea = (<CardFooter><Button text onClick={onClick}>{ctaLabel}</Button></CardFooter>);
  }

  style = 'rh-card rh-card-' + style;

  return (<div className={style}>
    {headerArea}
    <div className="rh-card-content">
      {children}
    </div>
    {footerArea}
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