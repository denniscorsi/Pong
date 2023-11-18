import React from 'react';

const Ball = ({ x, y }) => {
  return <div id='ball' style={{ top: `${x}px`, left: `${y}px` }}></div>;
};

export default Ball;
