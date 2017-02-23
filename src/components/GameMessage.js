import React from 'react';

const GameMessage = ({ gridSize, moves, newGame,visible }) => {
  let gameMessage;
  let size = gridSize;
  let score = moves-size;

  if (visible) {
    if (score == 0) {
      gameMessage = <div className="game-over visible">
        <p>Excellent !!!</p>
        <div className="rating" >
          <span className="star" >★</span>
          <span className="star" >★</span>
          <span className="star" >★</span>
        </div>
        <div className="text-center">
          <button className="new-game" onClick={newGame}>New Game</button>
        </div>
      </div>;
    }
    else if (score > 0 && score < 3) {
      gameMessage = <div className="game-over visible">
        <p>Great !!</p>
        <div className="rating" >
          <span className="star" >★</span>
          <span className="star" >★</span>
          <span className="star inactive" >★</span>
        </div>
        <div className="text-center">
          <button className="new-game" onClick={newGame}>New Game</button>
        </div>
      </div>;
    }
    else {
      gameMessage = <div className="game-over visible">
        <p>Good</p>
        <div className="rating" >
          <span className="star" >★</span>
          <span className="star inactive" >★</span>
          <span className="star inactive" >★</span>
        </div>
        <div className="text-center">
          <button className="new-game" onClick={newGame}>New Game</button>
        </div>
      </div>;
    }

  }
  else {
    gameMessage = <div className="game-over"></div>;
  }

  return gameMessage;

};

export default GameMessage;
