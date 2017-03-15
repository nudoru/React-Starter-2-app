import React from 'react';

export const PageModule = ({style = 'white', title, headline, children}) => {

  /*
   <div className="rh-page-module-cta">
   <button className="rh-button">Read more</button>
   </div>
   */

  style = 'rh-page-module rh-page-module-' + style;
    title = title ? (
        <h1 className="rh-page-module-title">{title}</h1>) : (
        <div></div>);
    headline = headline ? (
        <h2
          className="rh-page-module-headline">{headline}</h2>) : (
        <div></div>);

  return (<div className={style}>
    <div className="page-container">
      {title}
      {headline}
      {children}
    </div>
  </div>);
}