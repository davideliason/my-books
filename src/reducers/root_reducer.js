import {combineReducers} from 'redux';
import book_reducer from '../reducers/books.js';

const root_reducer = combineReducers({
	books: book_reducer
});

export default root_reducer;