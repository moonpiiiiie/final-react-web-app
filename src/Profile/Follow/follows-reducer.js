import { createSlice } from "@reduxjs/toolkit";
import { createFollowThunk, findFollowersByFollowedThunk, findFollowedByFollowingThunk, unfollowThunk, findIsFollowedByIdThunk } from "./follows-thunk";

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
           console.log("create thunk action.payload", action.payload);
            state.follows.unshift(action.payload);
           console.log("create thunk state.follows", state.follows[0]);
         },

        [findFollowersByFollowedThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.follows = action.payload;
        },

        [findFollowedByFollowingThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.follows = action.payload;
        },

        [unfollowThunk.fulfilled]: (state, action) => {
            console.log("unfollow action.payload", action.payload);
            console.log("unfollow state.follows", state.follows);


            state.follows = state.follows.filter((follow) => follow.following !== action.payload.following && action.payload.unfollow === true);
            console.log("unfollow state.follows 2", state.follows);


        },

        [findIsFollowedByIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
        }
    },

});
 export default followsSlice.reducer;