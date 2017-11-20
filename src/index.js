import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/app_container';
import store from './store/store.js';
import {Provider} from 'react-redux';

import {addBook,setGenreFilter,toggleBook} from './actions/index';

store.dispatch(addBook("blue","blue author","Mystery",true));
store.dispatch(toggleBook(1));
console.log(store.getState());

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
