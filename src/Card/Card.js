import React from 'react';
import './card.css';

function getReleaseYear(dateString) {
    let releaseDate = new Date(dateString);

    return releaseDate.getFullYear();
}

const Card = ({ movie }) => (
    <div className="card">
        <div className="card-poster">
            <img className="card-posterImage" src={movie.poster_path} />
        </div>
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