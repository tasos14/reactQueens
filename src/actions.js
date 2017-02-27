import {
  TOGGLE_SWITCH,
  CHANGE_GRIDSIZE,
  RESET,
  MOVE_QUEEN,
  INCREACE_MOVES
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
