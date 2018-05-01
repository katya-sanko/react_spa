import React from 'react';
import Card from '../Card/Card';
import './list.css';

const List = ({ movies }) => (
    <h4>Results</h4>
    <ul class="list-container">
        {
            movies && movies.map((movie, index) => <li class="card-wrapper" key={index}>  <Card movie={movie} />  </li>)
        }
    </ul>
);

export default List;