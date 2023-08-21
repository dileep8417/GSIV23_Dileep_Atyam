import { combineReducers } from "@reduxjs/toolkit";
import { moviesListReducer } from "../slices/moviesListSlice";
import { movieDetailsReducer } from "../slices/movieDetailsSlice";

const rootReducer = combineReducers({
    moviesList: moviesListReducer,
    movieDetails: movieDetailsReducer,
});

export default rootReducer;