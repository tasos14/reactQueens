import {
  TOGGLE_SWITCH,
  CHANGE_GRIDSIZE,
  INCREASE_MOVES
} from './constants';



export const toggleSwitch = () => {
  return {
    type: TOGGLE_SWITCH,
  };
};

export const increaceMoves = () => {
  return {
    type: INCREASE_MOVES,
  };
};

export const changeGrid = (newGridSize) => {
  return {
    type: CHANGE_GRIDSIZE,
    gridSize: newGridSize
  };
};
