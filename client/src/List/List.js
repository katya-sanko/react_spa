import React from 'react';
/* add CARD component */

const List = ({ movies }) => (
    <ul>
        <h4>Results</h4>
        {
            movies && movies.map((movie, index) => <li key={index}>  <span>{movie.title}</span><br></br><mark>{movie.tagline}</mark>  </li>)
        }
    </ul>
);

export default List;