import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import queensReducer from 'reducers';
import App from 'components/App';
import { loadState, saveState } from 'utils/localStorage';
import rootSaga from 'sagas';
import 'global-styles';

const localState = loadState();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(queensReducer, localState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
