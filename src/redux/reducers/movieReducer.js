import { SET_SEARCH_TERM, SET_SEARCHED, SET_MOVIES, SET_MOVIES_2024 } from '../actions/movieActions';

const initialState = {
    movies: [],
    movies2024: JSON.parse(localStorage.getItem('movies2024')) || [],
    searchTerm: '',
    searched: false
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            };
        case SET_SEARCHED:
            return {
                ...state,
                searched: action.payload
            };
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        case SET_MOVIES_2024:
            return {
                ...state,
                movies2024: action.payload
            };
        default:
            return state;
    }
};

export default movieReducer;
