import React, { Component } from 'react';
import Card from '../Card/Card';
import './list.css';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: this.props.movies,
            hasErrored: false,
            isLoading: false
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            movies: nextProps.movies,
            hasErrored: !nextProps.movies.length,
        };
    }

    render() {
        if (this.state.hasErrored) {
            return <span>No films found</span>
        }

        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className="list-wrapper">
                <ul className="list-container">
                    {
                        this.state.movies && this.state.movies.map((movie, index) => <li className="card-wrapper" key={index}>  <Card movie={movie} />  </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default List;