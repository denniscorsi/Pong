import React from 'react';

const Paddle = ({ id, loc }) => {
  const paddle = (
    <div id={id} className='paddle' style={{ top: `${loc}px` }}></div>
  );
  return paddle;
};

export default Paddle;
