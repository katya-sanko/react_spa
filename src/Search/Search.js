import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { moviesFetchData, sortBy, filterBy } from '../actions/movies';

import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'Avengers'
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        this.onFilterParamChange = this.onFilterParamChange.bind(this);
        this.onSortParamChange = this.onSortParamChange.bind(this);
    }

    componentDidMount() {
        this.onSubmit();
    }

    onSubmit() {
        this.props.fetchData(this.state.searchString, this.props.filterByParam, this.props.sortByParam);
    }

    onFilterParamChange(event) {
        this.props.store.dispatch(filterBy(event.target.value));
    }

    onSortParamChange(event) {
        this.props.store.dispatch(sortBy(event.target.value));
        this.onSubmit();
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
                    <input className="search-input" value={this.state.searchString} onChange={this.onInputChange} />

                    <section className="search-controls">
                        <span className="hdr">Search by</span>
                        <div className="search-radioGroup">
                            <input className="radioItems--bgColorful" type="radio" id="param1" name="params" value="title" checked={this.props.filterByParam === 'title'} onChange={this.onFilterParamChange} />
                            <label htmlFor="param1"><span className="hdr">Title</span></label>
                            <input className="radioItems--bgColorful" type="radio" id="param2" name="params" value="genre" checked={this.props.filterByParam === 'genre'} onChange={this.onFilterParamChange} />
                            <label htmlFor="param2"><span className="hdr">Genre</span></label>
                        </div>

                        <button className="btn search-button" id="search" onClick={this.onSubmit}><span className="hdr">Search</span></button>
                    </section>
                </div>

                <div className="sort-radioGroupWrapper">
                    <div className="sort-radioGroupInner">
                        <span className="sort-results">Results:{this.props.movies.length}</span>
                        
                        <div className="sort-radioGroup">
                            Sort by:
                            <input className="radioItems--bgTransparent" type="radio" id="sortOpt1" name="sortOpts" value="release_date" checked={this.props.sortByParam === 'release_date'} onChange={this.onSortParamChange} />
                            <label htmlFor="sortOpt1">release date</label>
                            <input className="radioItems--bgTransparent" type="radio" id="sortOpt2" name="sortOpts" value="vote_average" checked={this.props.sortByParam === 'vote_average'} onChange={this.onSortParamChange} />
                            <label htmlFor="sortOpt2">rating</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        hasErrored: state.moviesHasErrored,
        isLoading: state.moviesIsLoading,
        sortByParam: state.sortBy,
        filterByParam: state.filterBy
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (query, param1, param2) => dispatch(moviesFetchData(query, param1, param2))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
