/* eslint react/prop-types: 0 */
/* eslint no-class-assign: 0 */
/* eslint-disable no-param-reassign */
import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import {
  moveQueen,
  increaceMoves,
  increaseActiveQueens,
  decreaseActiveQueens,
  gameOver as gameOverAction,
  newGame,
} from '../actions';

class Game extends React.Component {
  render() {
    return <Board {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    size: state.get('gridSize'),
    highlight: state.get('highlight'),
    cols: state.get('cols'),
    rows: state.get('rows'),
    redBlocks: state.get('redBlocks'),
    activeQueens: state.get('activeQueens'),
    moves: state.get('moves'),
    isGameOver: state.get('gameOver'),
  };
}

function drawRedBlocks(row, col, gridSize, redBlocks) {
  let absDist;
  row--;
  col--;
  for (let i = 0; i < gridSize; i++) {
    absDist = Math.abs(i - col);

    redBlocks[gridSize * row + i] = 1;
    redBlocks[gridSize * i + col] = 1;
    for (let j = 0; j < gridSize; j++) {
      if (j === row - absDist || j === row + absDist) {
        redBlocks[gridSize * j + i] = 1;
      }
    }
  }
  redBlocks[gridSize * row + col] = 0;

  return redBlocks;
}

function removeRedBlocks(row, col, gridSize, redBlocks, cols) {
  row--;
  col--;
  for (let i = 0; i < gridSize; i++) {
    redBlocks[gridSize * row + i] = 0;
    redBlocks[gridSize * i + col] = 0;
    for (let j = 0; j < gridSize; j++) {
      redBlocks[gridSize * j + i] = 0;
    }
  }

  for (let i = 0; i < gridSize; i++) {
    if (cols[i] !== 0) {
      redBlocks = drawRedBlocks(cols[i], i + 1, gridSize, redBlocks);
    }
  }

  return redBlocks;
}

function mapDispatchToProps(dispatch) {
  return {
    newGame: (gridSize) => {
      const cols = [];
      const rows = [];
      const redBlocks = [];


      for (let i = 0; i < gridSize; i++) {
        cols.push(0);
        rows.push(0);
        for (let j = 0; j < gridSize; j++) {
          redBlocks.push(0);
        }
      }
      dispatch(newGame(cols, rows, redBlocks));
    },

    gameOver: () => {
      dispatch(gameOverAction());
    },

    onTileClick: (id, cols, rows, gridSize, redBlocks) => {
      let row;
      let col;
      let newRedBlocks = redBlocks.slice(0);
      const newRows = rows.slice(0);
      const newCols = cols.slice(0);

      if (id.length === 2) {
        row = Number(id.charAt(0));
        col = Number(id.charAt(1));
      } else {
        row = Number(id.charAt(1));
        col = Number(id.charAt(2));
      }

      // when you click a tile for the first time on a column
      if (newCols[col - 1] === 0) {
        newCols[col - 1] = row;
        newRows[row - 1] = col;
        dispatch(increaceMoves());
        newRedBlocks = drawRedBlocks(row, col, gridSize, newRedBlocks);
        dispatch(increaseActiveQueens());
      } else if (newCols[col - 1] === row) { // when you click a tile with a queen on
        newCols[col - 1] = 0;
        newRows[row - 1] = 0;
        newRedBlocks = removeRedBlocks(row, col, gridSize, newRedBlocks, newCols);
        dispatch(decreaseActiveQueens());
      } else { // when you have already clicked a tile on that column
        const prevRow = newCols[col - 1];
        newCols[col - 1] = row;
        newRows[row - 1] = col;
        dispatch(increaceMoves());
        newRedBlocks = removeRedBlocks(prevRow, col, gridSize, newRedBlocks, newCols);
      }

      dispatch(moveQueen(newRows, newCols, newRedBlocks));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
