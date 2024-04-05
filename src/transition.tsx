import React from 'react';
import Curve from './components/Layout/Curve/Curve';

const transition = (OgComponent: React.ComponentType) => {
  return () => (
    <>
      <OgComponent />
      <Curve />
    </>
  );
};

export default transition;
