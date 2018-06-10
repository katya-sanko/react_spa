import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Search from '../Search/Search';
import List from '../List/List';
import Film from '../Film/Film';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ErrorBoundary  >
                <Switch>
                    <Route path='/movies' exact render={(props) => (
                        <div>
                            <Search {...props} />
                            <List {...props} />
                        </div>
                    )} />

                    <Route path='/movies/film/:id' exact render={(props) => (
                        <Film {...props} />
                    )} />
                </Switch>
            </ErrorBoundary>
        );
    }
}

export default App;