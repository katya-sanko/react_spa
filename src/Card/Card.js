import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import { getReleaseYear } from '../helpers.js';

function getUniqLink(id) {
    return `/movies/film/${id}`;
}

const Card = ({ movie }) => (
    <div className="card">
        <Link to={getUniqLink(movie.id)} className="card-poster">
            <img className="card-posterImage" src={movie.poster_path} />
        </Link>
        <div className="card-inlineInfo">
            <span className="card-title">{movie.title}</span>
            <span className="card-releaseYear">{getReleaseYear(movie.release_date)}</span>
        </div>
        {
            movie.genres && movie.genres.map((genre, index) => <span className="card-genre" key={index}> {genre}  </span>)
        }
    </div>
);

export default Card;