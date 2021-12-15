import * as actionTypes from 'actions/actionTypes';

export const toggleSwitch = () => ({
    type: actionTypes.TOGGLE_SWITCH,
});

export const changeGrid = (gridSize) => ({
    type: actionTypes.CHANGE_GRIDSIZE,
    gridSize,
});

export const reset = () => ({
    type: actionTypes.RESET,
});

export const moveQueen = (id) => ({
    type: actionTypes.MOVE_QUEEN,
    id,
});

export const gameOver = () => ({
    type: actionTypes.GAME_OVER,
});

export const newGame = () => ({
    type: actionTypes.NEW_GAME,
});
