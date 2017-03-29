import React from 'react';

export const Hero = ({children}) => {
  return (
    <div className="rh-hero rh-hero-module-top">
      {children}
    </div>
  );
};

export default Hero;