export function moviesHasErrored(bool) {
    return {
        type: 'MOVIES_HAS_ERRORED',
        hasErrored: bool
    };
}

export function moviesIsLoading(bool) {
    return {
        type: 'MOVIES_IS_LOADING',
        isLoading: bool
    };
}

export function moviesFetchDataSuccess(movies) {
    return {
        type: 'MOVIES_FETCH_DATA_SUCCESS',
        movies
    };
}

export function moviesFetchData(query, param) {
    let url = `http://react-cdp-api.herokuapp.com/movies?search=${encodeURI(query)}&searchBy=${param}`;

    return (dispatch) => {
        dispatch(moviesIsLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(moviesIsLoading(false));

                return response.json();
            })
            .then((parsedResponse) => dispatch(moviesFetchDataSuccess(parsedResponse.data)))
            .catch(() => dispatch(moviesHasErrored(true)));;
    }
}