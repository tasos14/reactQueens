/* eslint-disable function-paren-newline */
/* eslint-disable  no-lonely-if */
import React, { PropTypes } from 'react';
import Tile from './Tile';
import GameMessage from './GameMessage';

const Board = ({
  size,
  highlight,
  onTileClick,
  cols,
  rows,
  redBlocks,
  activeQueens,
  moves,
  isGameOver,
  newGame,
}) => {
  let row = [];
  const board = {
    rows: [],
    queens: [],
  };

  for (let i = 1; i < size + 1; i++) {
    for (let j = 1; j < size + 1; j++) {
      // if its a red block
      if (redBlocks[size * (i - 1) + j - 1] === 1 && highlight) {
        if (cols[j - 1] === i) {
          row.push(
            <Tile
              key={`${i}${j}`}
              propId={`${i}${j}`}
              boardSize={size}
              handleTileClick={onTileClick}
              cols={cols}
              rows={rows}
              redBlocks={redBlocks} hasQueen={true} isRed={true}
            />,
          );
        } else {
          row.push(
            <Tile
              key={`${i}${j}`}
              propId={`${i}${j}`}
              boardSize={size}
              handleTileClick={onTileClick}
              cols={cols}
              rows={rows}
              redBlocks={redBlocks}
              isRed={true}
            />,
          );
        }
      } else {
        if (cols[j - 1] === i) {
          row.push(
            <Tile
              key={`${i}${j}`}
              propId={`${i}${j}`}
              boardSize={size}
              handleTileClick={onTileClick}
              cols={cols}
              rows={rows}
              redBlocks={redBlocks} hasQueen={true}
            />,
          );
        } else {
          row.push(
            <Tile
              key={`${i}${j}`}
              propId={`${i}${j}`}
              boardSize={size}
              handleTileClick={onTileClick}
              cols={cols}
              rows={rows}
              redBlocks={redBlocks}
            />,
          );
        }
      }
    }
    board.rows.push(<div key={i} className="board-row">{row}</div>);

    if (cols[i - 1] !== 0) {
      board.queens.push(<img key={`Q${i}`} src="./img/queen.png" id={`Q${i}`} className={`queen-${size} fade`} />);
    } else {
      board.queens.push(<img key={`Q${i}`} src="./img/queen.png" id={`Q${i}`} className={`queen-${size}`} />);
    }
    row = [];
  }


  return (
    <board>
      {board.rows}
      <GameMessage
        activeQueens={activeQueens}
        gridSize={size}
        moves={moves}
        newGame={newGame}
        visible={isGameOver}
      />
      {board.queens}
    </board>
  );
};


Board.propTypes = {
  size: PropTypes.number.isRequired,
  onTileClick: PropTypes.func.isRequired,
  rows: PropTypes.array.isRequired,
  cols: PropTypes.array.isRequired,
  redBlocks: PropTypes.array.isRequired,
  activeQueens: PropTypes.number.isRequired,
  moves: PropTypes.number.isRequired,
  newGame: PropTypes.func.isRequired,
  highlight: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  gameOver: PropTypes.func.isRequired,
};

export default Board;
