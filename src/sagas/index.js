import { put, call, select, all, takeEvery } from 'redux-saga/effects';
import { MOVE_QUEEN } from 'actions/actionTypes';
import request from 'utils/request';
import { gameOver as gameOverAction } from 'actions';

const getState = (state) => state.toJS(); // selector for the state

// Our worker Saga: will perform the async increment task
export function* checkIfGameOver() {
    const state = yield select(getState);
    const { gridSize, cols, activeQueens, gameOver } = state;

    if (activeQueens === gridSize && !gameOver) {
        try {
            const response = yield call(request, process.env.PENGINE_URL, 'POST', {
                size: gridSize,
                queens: cols,
            });

            const { result } = response.data;
            if (result && !gameOver) {
                yield put(gameOverAction());
            }
        } catch (err) {
            console.log('Error: \n' + err); // eslint-disable-line
        }
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchCheckIfGameOver() {
    yield takeEvery(MOVE_QUEEN, checkIfGameOver);
}

export default function* rootSaga() {
    yield all([watchCheckIfGameOver()]);
}
