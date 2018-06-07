import axios from 'axios';

export const getGenres = () => {
    return dispatch => {
        dispatch(getGenresRequest());

        axios.get(`http://localhost:3001/api/genres`)
        .then(function (response) {
          dispatch(getGenresSuccess(response));
        })
        .catch(function (error) {
          dispatch(getGenresError(error));
        });
    };
}

function getGenresRequest() {
    return {
        type: 'GET_GENRES_REQUEST',
        isFetching: true
    };
}

function getGenresSuccess (genres) {
    return {
        type: 'GET_GENRES_SUCCESS',
        isFetching: false,
        error: false,
        genres
    };
}

function getGenresError(errorMessage) {
    return {
        type: 'GET_GENRES_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}
