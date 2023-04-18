import * as followsService from './follows-service';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const createFollowThunk = createAsyncThunk(
   'follows/create',
    async (follow) => {
        const response = await followsService.createFollow(follow);
        return response;
    }
);

export const findFollowingByFollowedThunk = createAsyncThunk(
    'follows/findFollowed',
    async (userId) => {
        const response = await followsService.findFollowingByFollowed(userId);
        return response.data;
    }
);

export const findFollowedByFollowingThunk = createAsyncThunk(
    'follows/findFollowing',
    async (userId) => {
        const response = await followsService.findFollowedByFollowing(userId);
        return response.data;
    }
);

export const unfollowThunk = createAsyncThunk(
    'follows/unfollow',
    async (follow) => {
        const response = await followsService.unfollow(follow);
        return response;
    }
);

export const findIsFollowedByIdThunk = createAsyncThunk(
    'follows/findIsFollowed',
    async (follow) => {
        const response = await followsService.findIsFollowedById(follow);
        return response;
    }
);
