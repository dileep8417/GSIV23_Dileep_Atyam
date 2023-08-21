import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieDetailsUrl } from "../constants/urls";
import { sampleAccessToken } from "../constants/sampleCredentials";
import axios from "axios";

const initialState = {
    isLoading: false,
    movie: {},
};

export const fetchMovieDetails = createAsyncThunk('movieDetails/fetchMovieDetails', async ({movieId}) => {
    const url = `${movieDetailsUrl}/${movieId}?append_to_response=credits&language=en-US`;
    const accessToken = process.env.ACCESS_TOKEN || sampleAccessToken;
    if (!accessToken) {
        return Promise.reject();
    }

    const { data } = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    });

    return data;
});

const moveDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovieDetails.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movie = action.payload;
        });

        builder.addCase(fetchMovieDetails.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const movieDetailsReducer = moveDetailsSlice.reducer;

export const { updatePageNumber, setSearchTerm, resetResults } = moveDetailsSlice.actions;