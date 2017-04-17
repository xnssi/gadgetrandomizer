import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";

import App from './components/app';
import reducers from './reducers';

import { save, load } from "redux-localstorage-simple";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, save())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, load())}>
    <App />
  </Provider>
  , document.querySelector('#app'));
