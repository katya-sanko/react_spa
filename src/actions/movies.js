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

export function sortBy(sortByParam) {
    return {
        type: 'SORT_BY_PARAM',
        sortByParam
    };
}

export function filterBy(filterByParam) {
    return {
        type: 'FILTER_BY_PARAM',
        filterByParam
    };
}

export function moviesFetchData(query, param1, param2) {
    let url = `http://react-cdp-api.herokuapp.com/movies?limit=50&search=${encodeURI(query)}&searchBy=${param1}&sortBy=${param2}`;

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