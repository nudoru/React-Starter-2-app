import React from 'react';

export const Breadcrumbs =({crumbs}) => {
    return (
      <ul className="rh-breadcrumbs">
        {
          crumbs.map((item, i) => {
            let crumb = item.route ? (
              <li key={i}><a href={item.route}>{item.label}</a></li>) :
              (<li key={i}>{item.label}</li>);
            return crumb;
          })
        }
      </ul>
    );
};