import React from 'react';
import Card from '../Card/Card';
import './list.css';

const List = ({ movies }) => (
    <div className="list-wrapper">
        { !movies.length && <span>No films found</span> }
        <ul className="list-container">
            {
                movies && movies.map((movie, index) => <li className="card-wrapper" key={index}>  <Card movie={movie} />  </li>)
            }
        </ul>
    </div>

);

export default List;