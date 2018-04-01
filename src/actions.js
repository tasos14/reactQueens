import {
  TOGGLE_SWITCH,
  CHANGE_GRIDSIZE,
  RESET,
  MOVE_QUEEN,
  INCREACE_MOVES,
  INCREACE_ACTIVE_QUEENS,
  DECREACE_ACTIVE_QUEENS,
  GAME_OVER,
  NEW_GAME,
} from './constants';

export const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});

export const changeGrid = (newGridSize, cols, rows, redBlocks) => ({
  type: CHANGE_GRIDSIZE,
  gridSize: newGridSize,
  cols,
  rows,
  redBlocks,
});

export const reset = (cols, rows, redBlocks) => ({
  type: RESET,
  cols,
  rows,
  redBlocks,
});

export const moveQueen = (rows, cols, redBlocks) => ({
  type: MOVE_QUEEN,
  cols,
  rows,
  redBlocks,
});

export const increaceMoves = () => ({
  type: INCREACE_MOVES,
});

export const increaseActiveQueens = () => ({
  type: INCREACE_ACTIVE_QUEENS,
});

export const decreaseActiveQueens = () => ({
  type: DECREACE_ACTIVE_QUEENS,
});

export const gameOver = () => ({
  type: GAME_OVER,
});

export const newGame = (cols, rows, redBlocks) => ({
  type: NEW_GAME,
  cols,
  rows,
  redBlocks,
});
