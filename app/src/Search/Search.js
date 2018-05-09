import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './search.css';

function getMovies(query, param) {
    let url = `http://react-cdp-api.herokuapp.com/movies?search=${encodeURI(query)}&searchBy=${param}`;

    return fetch(url)
        .then(res => {
            return res.json();
        });
}

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'Kill Bill',
            searchParam: 'title'
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onOptionChange = this.onOptionChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        this.onSubmit();
    }

    onSubmit() {
        console.log(this);
        getMovies(this.state.searchString, this.state.searchParam).then(response => {
            if (response && response.data) {
                return this.props.resultsHandler(response.data);
            }
        });
    }

    onOptionChange(event) {
        this.setState({
            searchParam: event.target.value
        });
    }

    onInputChange(event) {
        this.setState({
            searchString: event.target.value
        });
    }

    render() {
        return (
            <div className="Search">
                <input value={this.state.searchString} onChange={this.onInputChange} />

                <section className="search-radioGroup">
                    <input type="radio" id="param1" name="params" value="title" checked={this.state.searchParam === 'title'} onChange={this.onOptionChange} />
                    <label htmlFor="param1">Title</label>
                    <input type="radio" id="param2" name="params" value="genre" checked={this.state.searchParam === 'genre'} onChange={this.onOptionChange} />
                    <label htmlFor="param2">Genre</label>
                </section>

                <button className="btn" onClick={this.onSubmit}>Search</button>
            </div>
        );
    }
}