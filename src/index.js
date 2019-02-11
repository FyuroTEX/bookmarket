import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import '../node_modules/semantic-ui-css/semantic.min.css'
import './app.css';

import createStore from './store';
const store = createStore();



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
