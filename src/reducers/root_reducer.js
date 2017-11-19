import {combineReducers} from 'redux';
import books from '../reducers/books.js';
import genreFilter from '../reducers/genreFilter.js';

const root_reducer = combineReducers({
	books,
	genreFilter
});

export default root_reducer;