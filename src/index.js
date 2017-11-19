import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/app_container';
import store from './store/store.js';
import {Provider} from 'react-redux';

store.dispatch({
	type: 'ADD_BOOK',
	title: "2002",
	author: "That Guy",
	genre: "Science Fiction",
	owned: true
})

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
