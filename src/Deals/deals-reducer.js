import { createSlice } from "@reduxjs/toolkit";
import { findAllDealsThunk, deleteDealThunk, findDealByRestaurantIdThunk, findDealByUserIdThunk, createDealThunk } from "./deals-thunks";

const initialState = {
    deals: [],
    loading: false,
    error: null,
};

const dealsSlice = createSlice({
    name: "deals",
    initialState,
    reducers: {},
    extraReducers: {
        [findAllDealsThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findAllDealsThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.deals = action.payload;
        },
        [findAllDealsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [deleteDealThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteDealThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.deals = state.deals.filter(deal => deal._id !== action.payload._id);
        },
        [deleteDealThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [findDealByRestaurantIdThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findDealByRestaurantIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.deals = action.payload;
            
        },
        [findDealByRestaurantIdThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [findDealByUserIdThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findDealByUserIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.deals = action.payload;
        }, 
        [findDealByUserIdThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [createDealThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [createDealThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.deals.push({
                ...payload,
                date: Date.now()
            })
        },
        [createDealThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    } 
});

export default dealsSlice.reducer;
export const {createDeal, deleteDeal, findDealByRestaurantId, findDealByUserId, findAllDeals} = dealsSlice.actions;