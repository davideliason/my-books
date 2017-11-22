import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store/store.js';
import {Provider} from 'react-redux';

import {setGenreFilter} from './actions/index.js';


console.log("store state:" + store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
