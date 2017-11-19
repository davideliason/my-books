import {combineReducers} from 'redux';
import book_reducer from '../reducers/book_reducer.js';

const store = combineReducers({
	books: book_reducer
});

export default store;