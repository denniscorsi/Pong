import React from 'react';

const Header = () => {
  let player1score = 0;
  let player2score = 0;

  return (
    <>
      <h1>Pong</h1>
      <div id='score'>
        <h3>Player 1: {player1score}</h3>
        <h3>Player 2: {player2score}</h3>
      </div>
    </>
  );
};

export default Header;
