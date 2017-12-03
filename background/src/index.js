import { createStore, applyMiddleware } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';
import initialState from './initialState';

let middleWares = [
    thunkMiddleware,
    logger
];

// TODO restrict redux-logger use to only development

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleWares)
);

// Wrap store in react-chrome-redux and set communication port name
wrapStore(store, {portName: 'myApp'});