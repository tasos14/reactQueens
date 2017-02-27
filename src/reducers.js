import {  Map } from 'immutable';
import {
  TOGGLE_SWITCH,
  CHANGE_GRIDSIZE,
  MOVE_QUEEN,
  RESET,
  INCREACE_MOVES
} from './constants';

const initialState = Map({
  gridSize: 4,
  moves: 0,
  cols: [0,0,0,0],
  rows: [0,0,0,0],
  redBlocks: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  activeQueens: 0,
  gameOver: false,
  highlight: true,
});


const queensApp = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return state.set('highlight', !state.get('highlight'));
    case CHANGE_GRIDSIZE:
      return state
        .set('gridSize', action.gridSize)
        .set('cols', action.cols)
        .set('rows', action.rows)
        .set('redBlocks', action.redBlocks);
    case RESET:
      return state
        .set('cols', action.cols)
        .set('rows', action.rows)
        .set('redBlocks', action.redBlocks);

    case MOVE_QUEEN:
      return state
      .set('cols', action.cols)
      .set('rows', action.rows)
      .set('redBlocks', action.redBlocks);

      case INCREACE_MOVES:
        return state.set('moves', state.get('moves')+1);

    default:
      return state;

  }
};

export default queensApp;
