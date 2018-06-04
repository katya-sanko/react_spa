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
            <ErrorBoundary store={this.props.store} >
                <Switch>
                    <Route path='/movies' exact store={this.props.store} render={(props) => (
                        <div>
                            <Search {...props} store={this.props.store} />
                            <List {...props} store={this.props.store} />
                        </div>
                    )} />

                    <Route path='/movies/film/:id' exact store={this.props.store} render={(props) => (
                        <Film {...props} store={this.props.store} />
                    )} />
                </Switch>
            </ErrorBoundary>
        );
    }
}

export default App;