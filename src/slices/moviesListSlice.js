import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { movieDiscoverUrl, movieSearchUrl } from "../constants/urls";

const initialState = {
    isLoading: false,
    movies: [],
    isOffline: false,
    errorMsg: null,
    page: 0,
    searchTerm: '',
    isAllResultsLoaded: false,
};

export const fetchMoviesList = createAsyncThunk('moviesList/fetchMovies', async (payload, thunkApi) => {
    const {page, isAllResultsLoaded, searchTerm} = thunkApi.getState().moviesList;

    let url;
    if (searchTerm) {
        url = `${movieSearchUrl}&page=${page}&query=${searchTerm}`;
    } else {
        url = `${movieDiscoverUrl}&page=${page}`;
    }

    if (isAllResultsLoaded) {
        return Promise.reject();
    }

    const accessToken = process.env.ACCESS_TOKEN || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTk2YTdiYzU3Y2U3NDIyYTljZjdmOTU3NDliYWZiMyIsInN1YiI6IjY0ZTFhYjE2ZTE5ZGU5MDBjNjhjMGU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RTNWRNYOGqUBIe0AIZvGQcRyjL9pHubRD-eE5Sj6kjQ';
    if (!accessToken) {
        return Promise.reject();
    }

    const {data} = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    });

    const result = {};

    if (data.total_pages === data.page) {
        result.isAllResultsLoaded = true;
    }
    
    result.movies = data.results;

    return result;
});

const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState: initialState,
    reducers: {
        resetResults: (state) => {
            state.page = 1;
            state.movies = [];
            state.searchTerm = '';
            state.isAllResultsLoaded = false;
        },
        updatePageNumber: (state) => {
            state.page = state.page + 1;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.isAllResultsLoaded = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMoviesList.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchMoviesList.fulfilled, (state, result) => {
            state.isLoading = false;
            const {payload} = result;
            state.movies = [...state.movies, ...payload.movies]
            if (payload.isAllResultsLoaded) {
                state.isAllResultsLoaded = true;
            }
        });

        builder.addCase(fetchMoviesList.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const moviesListReducer = moviesListSlice.reducer;

export const { updatePageNumber, setSearchTerm, resetResults } = moviesListSlice.actions;