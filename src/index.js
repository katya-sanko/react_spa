import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './App/App';
import ErrorPage from './ErrorPage/ErrorPage';

const store = configureStore(); // initialState here could be set up here/ restored from localStorage

ReactDOM.render(
    <Provider store={store}>
        <Router store={store}>
            <Switch store={store}>
                <Route path='/movies' store={store} render={(props) => (
                    <App  {...props} store={store}  />
                )} />
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
