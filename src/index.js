import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App/App';

const store = configureStore(); // initialState here could be set up here/ restored from localStorage

ReactDOM.render(
    <Provider store={store} >
        <App store={store} />
    </Provider>,
    document.getElementById('root')
);
