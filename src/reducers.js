import { fromJS } from 'immutable';
import { TOGGLE_SWITCH, CHANGE_GRIDSIZE } from './constants';

const initialState = fromJS({
  highlight: true,
  gridSize: 4
});


const queensApp = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return state.set('highlight', !state.toObject().highlight);
    case CHANGE_GRIDSIZE:
      return state.set('gridSize', action.gridSize);
    default:
      return state;

  }
};

export default queensApp;
