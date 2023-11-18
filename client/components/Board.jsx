import React, { useEffect, useState } from 'react';
import Paddle from './Paddle.jsx';
import Ball from './Ball.jsx';

const Board = ({ change }) => {
  const [loc1, loc1Setter] = useState(100);
  const [loc2, loc2Setter] = useState(200);
  console.log('Loc2:', loc2);

  const handleKeyDown = () => {
    if (event.key === 'ArrowUp') {
      document.removeEventListener('keydown', handleKeyDown);
      loc2Setter(loc2 - 10);
    }
    if (event.key === 'ArrowDown') {
      document.removeEventListener('keydown', handleKeyDown);
      loc2Setter(loc2 + 10);
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  let x = 200;
  let y = 300;

  return (
    <>
      <div id='court'>
        <Paddle id={'paddle1'} loc={loc1} />
        <Paddle id={'paddle2'} loc={loc2} />
        <Ball x={x} y={y} />
      </div>
    </>
  );
};

export default Board;
