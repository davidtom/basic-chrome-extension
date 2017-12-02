import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { wrapStore } from 'react-chrome-redux';

import rootReducer from './reducers';
import initialState from './initialState';

const store = createStore(rootReducer, {});

// Wrap store in react-chrome-redux and set communication port name
wrapStore(store, {portName: 'myApp'});