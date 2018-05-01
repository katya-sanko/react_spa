import React from 'react';
import './card.css';

const Card = ({ movie }) => (
    <div class="card">
        <img class="card-poster" src={movie.poster_path}/>
        {
            movie.genres && movie.genres.map((genre, index) => <span key={index}> {genre}  </span>)
        }
    </div>
);

export default Card;