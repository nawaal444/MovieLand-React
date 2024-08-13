export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SEARCHED = 'SET_SEARCHED';
export const SET_MOVIES = 'SET_MOVIES';
export const SET_MOVIES_2024 = 'SET_MOVIES_2024';

export const setSearchTerm = (searchTerm) => ({
    type: SET_SEARCH_TERM,
    payload: searchTerm
});

export const setSearched = (searched) => ({
    type: SET_SEARCHED,
    payload: searched
});

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    payload: movies
});

export const setMovies2024 = (movies2024) => ({
    type: SET_MOVIES_2024,
    payload: movies2024
});
