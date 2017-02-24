import { fromJS } from 'immutable';
import {
  TOGGLE_SWITCH,
  CHANGE_GRIDSIZE,
  INCREASE_MOVES
} from './constants';

const initialState = fromJS({
  highlight: true,
  gridSize: 4,
  moves: 0
});


const queensApp = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return state.set('highlight', !state.get('highlight'));
    case CHANGE_GRIDSIZE:
      return state.set('gridSize', action.gridSize);
    case INCREASE_MOVES:
      return state.set('moves', state.get('moves')+1);
    default:
      return state;

  }
};

export default queensApp;
