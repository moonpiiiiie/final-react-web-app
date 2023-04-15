import * as reviewService from "./reviews-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findAllReviewsThunk = createAsyncThunk(
    "reviews/findAll",
    async () => {
        const reviews = await reviewService.findAllReviews();
        return reviews;
    }
);

export const createReviewThunk = createAsyncThunk(
    "reviews/create",
    async (review) => {
        const response = await reviewService.createReview(review);
        return response;
    }
);

export const deleteReviewThunk = createAsyncThunk(
    "reviews/delete",
    async (id) => {
        const response = await reviewService.deleteReview(id);
        debugger;
        console.log("thunks")
        console.log(response);
        return response;
    }
);

export const findReviewByUserIdThunk = createAsyncThunk(
    "reviews/findByUserId",
    async (id) => {
        const response = await reviewService.findReviewByUserId(id);
        return response;
    }
);

export const findReviewByRestaurantIdThunk = createAsyncThunk(
    "reviews/findByRestaurantId",
    async (id) => {
        const response = await reviewService.findReviewByRestaurantId(id);
        return response;
    }
);

