import * as actionTypes from 'actions/actionTypes';

export const toggleSwitch = () => ({
  type: actionTypes.TOGGLE_SWITCH,
});

export const changeGrid = (newGridSize, cols, rows, redBlocks) => ({
  type: actionTypes.CHANGE_GRIDSIZE,
  gridSize: newGridSize,
  cols,
  rows,
  redBlocks,
});

export const reset = (cols, rows, redBlocks) => ({
  type: actionTypes.RESET,
  cols,
  rows,
  redBlocks,
});

export const moveQueen = (rows, cols, redBlocks) => ({
  type: actionTypes.MOVE_QUEEN,
  cols,
  rows,
  redBlocks,
});

export const increaceMoves = () => ({
  type: actionTypes.INCREACE_MOVES,
});

export const increaseActiveQueens = () => ({
  type: actionTypes.INCREACE_ACTIVE_QUEENS,
});

export const decreaseActiveQueens = () => ({
  type: actionTypes.DECREACE_ACTIVE_QUEENS,
});

export const gameOver = () => ({
  type: actionTypes.GAME_OVER,
});

export const newGame = (cols, rows, redBlocks) => ({
  type: actionTypes.NEW_GAME,
  cols,
  rows,
  redBlocks,
});
