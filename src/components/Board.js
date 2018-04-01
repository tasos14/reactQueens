/* eslint-disable function-paren-newline */
/* eslint-disable  no-lonely-if */
import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';
import GameMessage from './GameMessage';

function Board(props) {
  let row = [];
  const board = {
    rows: [],
    queens: [],
  };

  for (let i = 1; i < props.size + 1; i++) {
    for (let j = 1; j < props.size + 1; j++) {
      const isRed = props.redBlocks[props.size * (i - 1) + j - 1] === 1 && props.highlight;
      const hasQueen = props.cols[j - 1] === i;

      row.push(
        <Tile
          key={`${i}${j}`}
          propId={`${i}${j}`}
          boardSize={props.size}
          handleTileClick={props.onTileClick}
          cols={props.cols}
          rows={props.rows}
          redBlocks={props.redBlocks}
          isRed={isRed}
          hasQueen={hasQueen}
        />,
      );
    }
    const fade = props.cols[i - 1] !== 0;

    board.rows.push(<div key={i} className="board-row">{row}</div>);
    board.queens.push(<img key={`Q${i}`} src="./img/queen.png" id={`Q${i}`} className={fade ? `queen-${props.size} fade` : `queen-${props.size}`} />);
    row = [];
  }


  return (
    <div id="board">
      {board.rows}
      <GameMessage
        activeQueens={props.activeQueens}
        gridSize={props.size}
        moves={props.moves}
        newGame={props.newGame}
        visible={props.isGameOver}
      />
      {board.queens}
    </div>
  );
}


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
