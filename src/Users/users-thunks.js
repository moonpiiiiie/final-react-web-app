import * as usersService from './users-service';
import {createAsyncThunk} from "@reduxjs/toolkit";

export const findAllUsersThunk = createAsyncThunk('users/findAll', async () => {
    const users = await usersService.findAllUsers();
    return users;
});

export const findUserByIdThunk = createAsyncThunk('users/findById', async (id) => {
    const user = await usersService.findUserById(id);
    return user;
});

export const createUserThunk = createAsyncThunk('users/create', async (user) => {
    await usersService.createUser(user);
    return user;
});

export const updateUserThunk = createAsyncThunk('users/update', async (user) => {
    await usersService.updateUser(user);
    return user;
});

export const deleteUserThunk = createAsyncThunk('users/delete', async (id) => {
    await usersService.deleteUser(id);
    return id;
});

export const loginThunk = createAsyncThunk('users/login', async (user) => {
    const response = await usersService.login(user);
    return response.data;
});

export const logoutThunk = createAsyncThunk('users/logout', async () => {
    await usersService.logout();
});

export const registerThunk = createAsyncThunk('users/register', async (user) => {
    await usersService.register(user);
});

export const profileThunk = createAsyncThunk('users/profile', async () => {
    const response = await usersService.profile();
    return response.data;
});