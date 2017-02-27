import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import queensApp from './reducers';
import App from './components/App';
import { loadState, saveState } from './localStorage';

let localState = loadState();

let store = createStore(queensApp, localState);

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
