import { TOGGLE_SWITCH, CHANGE_GRIDSIZE } from './constants';



export const toggleSwitch = () => {
  return {
    type: TOGGLE_SWITCH,
  };
};

export const changeGrid = (newGridSize) => {
  return {
    type: CHANGE_GRIDSIZE,
    gridSize: newGridSize
  };
};
