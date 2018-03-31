/* eslint-disable object-curly-newline */
import React, { PropTypes } from 'react';

const GameMessage = ({ gridSize, moves, newGame, visible }) => {
  let gameMessage;
  const size = gridSize;
  const score = moves - size;

  if (visible) {
    if (score === 0) {
      gameMessage = <div className="game-over visible">
        <p>Excellent !!!</p>
        <div className="rating" >
          <span className="star" >★</span>
          <span className="star" >★</span>
          <span className="star" >★</span>
        </div>
        <div className="text-center">
          <button className="new-game" onClick={() => newGame(gridSize)}>New Game</button>
        </div>
      </div>;
    } else if (score > 0 && score < 3) {
      gameMessage = <div className="game-over visible">
        <p>Great !!</p>
        <div className="rating" >
          <span className="star" >★</span>
          <span className="star" >★</span>
          <span className="star inactive" >★</span>
        </div>
        <div className="text-center">
          <button className="new-game" onClick={() => newGame(gridSize)}>New Game</button>
        </div>
      </div>;
    } else {
      gameMessage = <div className="game-over visible">
        <p>Good</p>
        <div className="rating" >
          <span className="star" >★</span>
          <span className="star inactive" >★</span>
          <span className="star inactive" >★</span>
        </div>
        <div className="text-center">
          <button className="new-game" onClick={() => newGame(gridSize)}>New Game</button>
        </div>
      </div>;
    }
  } else {
    gameMessage = <div className="game-over"></div>;
  }

  return gameMessage;
};

GameMessage.propTypes = {
  gridSize: PropTypes.number.isRequired,
  moves: PropTypes.number.isRequired,
  newGame: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default GameMessage;
