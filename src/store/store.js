import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import root_reducer from '../reducers/root_reducer.js';

const logger = createLogger();

const store = createStore(root_reducer,
  {},
  applyMiddleware(thunk,logger)
);

export default store;


