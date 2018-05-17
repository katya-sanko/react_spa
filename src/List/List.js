import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../Card/Card';
import './list.css';

class List extends Component {
    render() {
        if (this.props.hasErrored) {
            return <span>Something went wrong...</span>
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        if (this.props.movies && !this.props.movies.length) {
            return <p>No films found</p>;
        }

        return (
            <div className="list-wrapper">
                <ul className="list-container">
                    {
                        this.props.movies && this.props.movies.map((movie, index) => <li className="card-wrapper" key={index}>  <Card movie={movie} />  </li>)
                    }
                </ul>
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

export default connect(mapStateToProps)(List);