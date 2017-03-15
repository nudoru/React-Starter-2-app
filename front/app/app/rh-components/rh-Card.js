import React from 'react';

const Card = ({
  style = 'light',
  title,
  cta = 'Read more',
  ctaLink, children
}) => {

  let headerArea = title ? (<div className="rh-card-header">
          <h1>{title}</h1>
        </div>) : (<div/>),
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

export default Card;