/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import GameOverMessage from './GameOverMessage';

const GameMessage = ({ gridSize, moves, newGame, visible }) => {
  const size = gridSize;
  const score = moves - size;

  return (
    <div className={visible ? 'game-over visible' : 'game-over'}>
      <GameOverMessage score={score} />
      <div className="text-center">
        <button className="new-game" onClick={() => newGame(gridSize)}>New Game</button>
      </div>
    </div>
  );
};

GameMessage.propTypes = {
  gridSize: PropTypes.number.isRequired,
  moves: PropTypes.number.isRequired,
  newGame: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default GameMessage;
