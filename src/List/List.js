import React, { Component } from 'react';
import Card from '../Card/Card';
import './list.css';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            hasErrored: false,
            isLoading: false
        };

        this.props.store.subscribe(() => {
            // When state will be updated(in our case, when items will be fetched), 
            // we will update local component state and force component to rerender 
            // with new data.

            this.setState({
                movies: this.props.store.getState().movies,
                hasErrored: this.props.store.getState().hasErrored,
                isLoading: this.props.store.getState().isLoading
            });
        });
    }

    render() {
        if (this.state.hasErrored) {
            return <span>Something went wrong...</span>
        }

        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }

        if (this.state.movies && !this.state.movies.length) {
            return <p>No films found</p>;
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