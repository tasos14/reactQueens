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

function drawRedBlocks(row, col, gridSize, redBlocks) {
    let absDist;
    const _redBlocks = redBlocks.slice(0);

    for (let i = 0; i < gridSize; i++) {
        absDist = Math.abs(i - col);

        _redBlocks[gridSize * row + i] = 1;
        _redBlocks[gridSize * i + col] = 1;
        for (let j = 0; j < gridSize; j++) {
            if (j === row - absDist || j === row + absDist) {
                _redBlocks[gridSize * j + i] = 1;
            }
        }
    }
    _redBlocks[gridSize * row + col] = 0;

    return _redBlocks;
}

function removeRedBlocks(row, col, gridSize, redBlocks, cols) {
    let _redBlocks = redBlocks.slice(0);

    for (let i = 0; i < gridSize; i++) {
        _redBlocks[gridSize * row + i] = 0;
        _redBlocks[gridSize * i + col] = 0;
        for (let j = 0; j < gridSize; j++) {
            _redBlocks[gridSize * j + i] = 0;
        }
    }

    for (let i = 0; i < gridSize; i++) {
        if (cols[i] !== 0) {
            _redBlocks = drawRedBlocks(cols[i] - 1, i, gridSize, _redBlocks);
        }
    }

    return _redBlocks;
}

const queensReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_SWITCH:
            return state.set('highlight', !state.get('highlight'));

        case actionTypes.CHANGE_GRIDSIZE: {
            const cols = [...Array(action.gridSize)].map(() => 0);
            const rows = [...Array(action.gridSize)].map(() => 0);
            const redBlocks = [...Array(action.gridSize * action.gridSize)].map(() => 0);

            return state
                .set('gridSize', action.gridSize)
                .set('cols', cols)
                .set('rows', rows)
                .set('redBlocks', redBlocks)
                .set('activeQueens', 0)
                .set('gameOver', false)
                .set('moves', 0);
        }

        case actionTypes.RESET: {
            const gridSize = state.get('gridSize');
            const cols = [...Array(gridSize)].map(() => 0);
            const rows = [...Array(gridSize)].map(() => 0);
            const redBlocks = [...Array(gridSize * gridSize)].map(() => 0);

            return state.set('cols', cols).set('rows', rows).set('redBlocks', redBlocks).set('activeQueens', 0);
        }

        case actionTypes.MOVE_QUEEN: {
            let row;
            let col;
            const gridSize = state.get('gridSize');
            if (action.id.length === 2) {
                row = Number(action.id.charAt(0));
                col = Number(action.id.charAt(1));
            } else {
                row = Number(action.id.charAt(1));
                col = Number(action.id.charAt(2));
            }
            const rows = state.get('rows');
            const cols = state.get('cols');
            const redBlocks = state.get('redBlocks');

            // when you click a tile for the first time on a column
            if (cols[col - 1] === 0) {
                cols[col - 1] = row;
                rows[row - 1] = col;
                const newRedBlocks = drawRedBlocks(row - 1, col - 1, gridSize, redBlocks);

                return state
                    .set('cols', cols)
                    .set('rows', rows)
                    .set('redBlocks', newRedBlocks)
                    .set('activeQueens', state.get('activeQueens') + 1)
                    .set('moves', state.get('moves') + 1);
            }
            if (cols[col - 1] === row) {
                // when you click a tile with a queen on
                cols[col - 1] = 0;
                rows[row - 1] = 0;
                const newRedBlocks = removeRedBlocks(row - 1, col - 1, gridSize, redBlocks, cols);

                return state
                    .set('cols', cols)
                    .set('rows', rows)
                    .set('redBlocks', newRedBlocks)
                    .set('activeQueens', state.get('activeQueens') - 1);
            }
            // when you have already clicked a tile on that column
            const prevRow = cols[col - 1];
            cols[col - 1] = row;
            rows[row - 1] = col;
            const newRedBlocks = removeRedBlocks(prevRow - 1, col - 1, gridSize, redBlocks, cols);

            return state
                .set('cols', cols)
                .set('rows', rows)
                .set('redBlocks', newRedBlocks)
                .set('moves', state.get('moves') + 1);
        }

        case actionTypes.GAME_OVER:
            return state.set('gameOver', !state.get('gameOver'));

        case actionTypes.NEW_GAME: {
            const cols = state.get('cols').map(() => 0);
            const rows = state.get('rows').map(() => 0);
            const redBlocks = state.get('redBlocks').map(() => 0);

            return state
                .set('cols', cols)
                .set('rows', rows)
                .set('redBlocks', redBlocks)
                .set('moves', 0)
                .set('activeQueens', 0)
                .set('gameOver', false);
        }

        default:
            return state;
    }
};

export default queensReducer;
