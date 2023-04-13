import { createSlice } from "@reduxjs/toolkit";
import { findAllRestaurantsThunk, findRestaurantByIdThunk } from "./restaurants-thunks";

const initialState = {
    restaurants: [],
    loading: false,
    error: null,
};

const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {},
    extraReducers: {
        [findAllRestaurantsThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findAllRestaurantsThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.restaurants = action.payload;
        },
        [findAllRestaurantsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [findRestaurantByIdThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findRestaurantByIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.restaurant = action.payload;
        },
        [findRestaurantByIdThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
});
