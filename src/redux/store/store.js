import { createStore, combineReducers } from 'redux';
import movieReducer from '../reducers/movieReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
});

const store = createStore(rootReducer);

export default store;
