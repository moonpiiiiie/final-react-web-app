import * as restaurantService from "./restaurants-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findAllRestaurantsThunk = createAsyncThunk(
    "restaurants/findAll",
    async () => {
        const restaurants = await restaurantService.findAllRestaurants();
        return restaurants;
    }   
);

export const findRestaurantByIdThunk = createAsyncThunk(
    "restaurants/findById",
    async (id) => {
        const response = await restaurantService.findRestaurantById(id);
        return response.data;
    }
);

