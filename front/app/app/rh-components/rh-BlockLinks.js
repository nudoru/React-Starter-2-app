import React from 'react';

export const BlockLinkHGroup = ({style='white', children}) => {
  return <ul className={'block-links-'+style+' block-links-horizontal'}>{children}</ul>;
};

export const BlockLinkVGroup = ({style='white', children}) => {
  return <ul className={'block-links-'+style}>{children}</ul>;
};

export const BlockLink = ({label, byline, link}) => {
  let bylineEl = byline ? <em>{byline}</em> : null;

  return <li><a href={link}>{label}{bylineEl}</a></li>
};