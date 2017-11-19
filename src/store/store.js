import {createStore, applyMiddleware} from 'redux';
import root_reducer from '../reducers/root_reducer.js';
import {createLogger} from "redux-logger";

const logger = createLogger();

const store = createStore(root_reducer,
  {},
  applyMiddleware(logger)
);

export default store;


