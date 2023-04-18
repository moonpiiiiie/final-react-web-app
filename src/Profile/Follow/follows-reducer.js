import { createSlice } from "@reduxjs/toolkit";
import { createFollowThunk, findFollowingByFollowedThunk, findFollowedByFollowingThunk, unfollowThunk, findIsFollowedByIdThunk } from "./follows-thunk";

const initialState = {
    follows: [],
    loading: false,
    error: null,
};
const followsSlice = createSlice({
    name: "followed",
    initialState,
    reducers:{},
    extraReducers: {
         [createFollowThunk.fulfilled]: (state, action) => {
            state.follows.unshift(action.payload);
         },

        [findFollowingByFollowedThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.follows = action.payload;
        },

        [findFollowedByFollowingThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.follows = action.payload;
        },

        [unfollowThunk.fulfilled]: (state, action) => {
            state.follows = state.follows.filter((follow) => follow.following !== action.payload.following && action.payload.unfollow === true);
        },

        [findIsFollowedByIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
        }
    },

});
 export default followsSlice.reducer;