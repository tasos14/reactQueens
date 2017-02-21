import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import queensApp from './reducers';

const store = createStore(queensApp);
let state = store.getState();
console.log(state);

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};
