import React, { Component } from 'react';
import './film.css';

export default class Film extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="film">
                ID: {this.props.match.params.id}
            </div>
        );
    }
}
