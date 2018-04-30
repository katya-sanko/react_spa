import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from '../List/List';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: 'Ghost in the Shell',
            results: []
        };
    }

    componentDidMount() {
        fetch('http://react-cdp-api.herokuapp.com/movies?search=ghost%20in%20the%20shell&searchBy=title') /* TODO: add encoding of search string */
            .then(res => {
                return res.json();
            })
            .then(response => {
                if (response && response.data) {
                    return this.setState({ results: response.data });
                }
            });
    }

    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.searchQuery} />
                    <button>Search</button>
                </form>
                <List movies={this.state.results} />
            </div>
        );
    }
}