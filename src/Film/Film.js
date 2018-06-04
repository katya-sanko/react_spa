import React, { Component } from 'react';
import './film.css';
import { connect } from 'react-redux';
import { movieFetchDataById } from '../actions/movies';

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
            <div className="film">
                <div className="film-header">
                    netflixroulette [SEARCH]
                </div>
                <div className="film-content">
                    <div className="film-imageWrapper"><img src={this.props.movie.poster_path} /></div>

                    <div className="film-info">
                        <h3>{this.props.movie.title}</h3>
                        {/* <small>{this.props.movie.genres.join(', ')}</small> */}
                        <span>{this.props.movie.release_date}</span>
                        <p>{this.props.movie.overview}</p>
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
