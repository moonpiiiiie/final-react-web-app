import { createSlice } from "@reduxjs/toolkit";
import { findAllReviewsThunk, deleteReviewThunk, findReviewByRestaurantIdThunk, findReviewByUserIdThunk, createReviewThunk } from "./reviews-thunks";

const initialState = {
    reviews: [],
    loading: false,
    error: null,
};

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: {
        [findAllReviewsThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findAllReviewsThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.reviews = action.payload;
        },
        [findAllReviewsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [deleteReviewThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteReviewThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.reviews = state.reviews.filter(review => review._id !== action.payload._id);
            console.log("reduce");
            console.log(action);
            console.log(state.review);
            debugger;
        },
        [deleteReviewThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [findReviewByRestaurantIdThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findReviewByRestaurantIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.reviews = action.payload;
            // console.log("reduce");
            // console.log(action);
            // console.log(state.review);
            // console.log(action.payload);
            
        },
        [findReviewByRestaurantIdThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [findReviewByUserIdThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findReviewByUserIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.reviews = action.payload;
        }, 
        [findReviewByUserIdThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [createReviewThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [createReviewThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.reviews.push({
                ...payload,
                date: Date.now()
            })
        },
        [createReviewThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    } 
});

export default reviewsSlice.reducer;
export const {createReview, deleteReview, findReviewByRestaurantId, findReviewByUserId, findAllReviews} = reviewsSlice.actions;