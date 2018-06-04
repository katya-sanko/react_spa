import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Search from '../Search/Search';
import List from '../List/List';
import Film from '../Film/Film';
import { connect } from 'react-redux';
import { movieFetchDataById } from '../actions/movies';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(nextProps) {
        let locationChanged = nextProps.location.pathname !== this.props.location.pathname;
        let movieId = parseInt(nextProps.location.pathname.match(/\d+/)[0], 10);
        if (locationChanged && movieId) {
            this.props.fetchData(movieId);
        //debugger;
        }
    }

    render() {
        return (
            <ErrorBoundary store={this.props.store} >
                <Switch>
                    <Route path='/movies' exact store={this.props.store} render={(props) => (
                        <div>
                            <Search {...props} store={this.props.store} />
                            <List {...props} store={this.props.store} />
                        </div>
                    )} />

                    <Route path='/movies/film/:id' exact store={this.props.store} render={(props) => (
                        <Film {...props} store={this.props.store} />
                    )} />
                </Switch>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie,
        hasErrored: state.movieHasErrored,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(movieFetchDataById(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);