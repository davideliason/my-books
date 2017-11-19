import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/app_container';
import store from './store/store.js';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
