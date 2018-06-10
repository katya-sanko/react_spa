import React, { Component } from 'react';
import './film.css';
import { connect } from 'react-redux';
import { movieFetchDataById } from '../actions/movies';
import { getReleaseYear } from '../helpers.js';

class Film extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let movieId = parseInt(this.props.location.pathname.match(/\d+/)[0], 10);

        if (movieId) {
            this.props.fetchData(movieId);
        }
    }

    render() {
        return (
            <div className="film-wrapper">
                <div className="film-inner">
                    <div className="film-topNav">
                        {/* header panel */}
                    </div>
                    <div className="film-content">
                        <div className="film-imageWrapper">
                            <img className="film-image" src={this.props.movie.poster_path} />
                        </div>
                        <div className="film-info">
                            <div className="film-header">
                                <h3 className="txt film-title">{this.props.movie.title}</h3>
                                <span className="film-rating">{this.props.movie.vote_average}</span>
                            </div>
                            <h4 className="film-tagline">{this.props.movie.tagline}</h4>
                            <span>{getReleaseYear(this.props.movie.vote_average)}</span>
                            <p>{this.props.movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie,
        hasErrored: state.movie
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(movieFetchDataById(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
