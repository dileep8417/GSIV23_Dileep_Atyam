import { combineReducers } from "@reduxjs/toolkit";
import { moviesListReducer } from "../slices/moviesListSlice";

const rootReducer = combineReducers({
    moviesList: moviesListReducer
});

export default rootReducer;