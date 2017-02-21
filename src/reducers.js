import { TOGGLE_SWITCH, CHANGE_GRIDSIZE } from './constants';

const initialState = {
  highlight: true,
  gridSize: 4
};


const queensApp = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        highlight: !state.highlight
      };
    case CHANGE_GRIDSIZE:
      return {
        ...state,
        gridSize: action.gridSize
      };
    default:
      return state;

  }
};

export default queensApp;
