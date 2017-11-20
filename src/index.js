import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/app_container';
import store from './store/store.js';
import {Provider} from 'react-redux';

store.dispatch({
  type: 'ADD_BOOK',
  author: "xyz",
  title: "him",
  genre: "Mystery",
  owned: false
});

store.dispatch({
	type: 'TOGGLE_BOOK',
	id: 0
})


console.log(store.getState());

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
