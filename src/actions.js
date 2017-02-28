import {
  TOGGLE_SWITCH,
  CHANGE_GRIDSIZE,
  RESET,
  MOVE_QUEEN,
  INCREACE_MOVES,
  INCREACE_ACTIVE_QUEENS,
  DECREACE_ACTIVE_QUEENS,
  GAME_OVER,
  NEW_GAME
} from './constants';



export const toggleSwitch = () => {
  return {
    type: TOGGLE_SWITCH,
  };
};

export const changeGrid = (newGridSize,cols,rows,redBlocks) => {
  return {
    type: CHANGE_GRIDSIZE,
    gridSize: newGridSize,
    cols: cols,
    rows: rows,
    redBlocks: redBlocks
  };
};

export const reset = (cols,rows,redBlocks) => {
  return {
    type: RESET,
    cols: cols,
    rows: rows,
    redBlocks: redBlocks
  };
};

export const moveQueen = (rows,cols,redBlocks) => {
  return {
    type: MOVE_QUEEN,
    cols: cols,
    rows: rows,
    redBlocks: redBlocks
  };
};

export const increaceMoves = () => {
  return {
    type: INCREACE_MOVES
  };
};

export const increaseActiveQueens = () => {
  return {
    type: INCREACE_ACTIVE_QUEENS
  };
};

export const decreaseActiveQueens = () => {
  return {
    type: DECREACE_ACTIVE_QUEENS
  };
};

export const gameOver = () => {
  return {
    type: GAME_OVER
  };
};

export const newGame = (cols,rows,redBlocks) => {
  return {
    type: NEW_GAME,
    cols: cols,
    rows: rows,
    redBlocks: redBlocks
  };
};
