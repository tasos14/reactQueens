import { Map } from 'immutable';
import * as actionTypes from 'actions/actionTypes';

const initialState = Map({
  gridSize: 4,
  moves: 0,
  cols: [0, 0, 0, 0],
  rows: [0, 0, 0, 0],
  redBlocks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  activeQueens: 0,
  gameOver: false,
  highlight: true,
});


const queensReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SWITCH:
      return state.set('highlight', !state.get('highlight'));

    case actionTypes.CHANGE_GRIDSIZE:
      return state
        .set('gridSize', action.gridSize)
        .set('cols', action.cols)
        .set('rows', action.rows)
        .set('redBlocks', action.redBlocks)
        .set('activeQueens', 0)
        .set('gameOver', false)
        .set('moves', 0);

    case actionTypes.RESET:
      return state
        .set('cols', action.cols)
        .set('rows', action.rows)
        .set('activeQueens', 0)
        .set('redBlocks', action.redBlocks);

    case actionTypes.MOVE_QUEEN:
      return state
        .set('cols', action.cols)
        .set('rows', action.rows)
        .set('redBlocks', action.redBlocks);

    case actionTypes.INCREACE_MOVES:
      return state.set('moves', state.get('moves') + 1);

    case actionTypes.INCREACE_ACTIVE_QUEENS:
      return state.set('activeQueens', state.get('activeQueens') + 1);

    case actionTypes.DECREACE_ACTIVE_QUEENS:
      return state.set('activeQueens', state.get('activeQueens') - 1);

    case actionTypes.GAME_OVER:
      return state.set('gameOver', !state.get('gameOver'));

    case actionTypes.NEW_GAME:
      return state
        .set('cols', action.cols)
        .set('rows', action.rows)
        .set('redBlocks', action.redBlocks)
        .set('moves', 0)
        .set('activeQueens', 0)
        .set('gameOver', false);

    default:
      return state;
  }
};

export default queensReducer;
