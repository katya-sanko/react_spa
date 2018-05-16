import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Search from '../Search/Search';
import List from '../List/List';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ErrorBoundary store={this.props.store} >
                <Search store={this.props.store} />
                <List store={this.props.store} />
            </ErrorBoundary>
        );
    }
}