import {combineReducers} from 'redux';
import books from '../reducers/books.js';

const root_reducer = combineReducers({
	books
});

export default root_reducer;