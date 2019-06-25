import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';

import allReducers from './reducers';
import allSagas from './sagas';

import App from './containers/app';

import "./css/index.css";

// Dev Tools Enhancement
const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
: compose;

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Apply enhancers
const allStoreEnhancers = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

// Create Redux Store
const store = createStore(
  allReducers,
  allStoreEnhancers
);

//Run Sagas
sagaMiddleware.run(allSagas);


// Render Main App to the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
