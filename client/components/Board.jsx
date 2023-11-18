import React, { useEffect, useState } from 'react';
import Paddle from './Paddle.jsx';

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

  return (
    <>
      <div id='court'>
        <Paddle id={'paddle1'} loc={loc1} />
        <Paddle id={'paddle2'} loc={loc2} />
      </div>
    </>
  );
};

export default Board;
