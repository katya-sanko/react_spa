import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Search from '../Search/Search';
import List from '../List/List';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };

        this.resultsHandler = this.resultsHandler.bind(this);
    }


    resultsHandler(value) {
        this.setState({
            results: value
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <Search resultsHandler={this.resultsHandler} />
                <List movies={this.state.results} />
            </ErrorBoundary>
        );
    }
}