import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { moviesFetchData } from '../actions/movies';

import './search.css';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'avengers',
            searchParam: 'title'
        };

        this.onEnter = this.onEnter.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onOptionChange = this.onOptionChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        this.onSubmit();
    }

    onSubmit() {
        this.props.fetchData(this.state.searchString, this.state.searchParam);
    }

    onEnter(event) {
        if (event && event.keyCode === 13) {
            this.onSubmit();
        }
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
            <div className="search-wrapper">
                <div className="search-container">
                    <span className="txt">netflixroulette</span>
                    <h3 className="hdr">Find your movie</h3>
                    <input className="search-input" value={this.state.searchString} onChange={this.onInputChange} onKeyDown={this.onEnter}/>

                    <section className="search-controls">
                        <span className="hdr">Search by</span>
                        <div className="search-radioGroup">
                            <input type="radio" id="param1" name="params" value="title" checked={this.state.searchParam === 'title'} onChange={this.onOptionChange} />
                            <label htmlFor="param1"><span className="hdr">Title</span></label>
                            <input type="radio" id="param2" name="params" value="genre" checked={this.state.searchParam === 'genre'} onChange={this.onOptionChange} />
                            <label htmlFor="param2"><span className="hdr">Genre</span></label>
                        </div>

                        <button className="btn search-button" id="search" onClick={this.onSubmit}><span className="hdr">Search</span></button>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        hasErrored: state.moviesHasErrored,
        isLoading: state.moviesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (query, param) => dispatch(moviesFetchData(query, param))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
