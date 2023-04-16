import * as dealService from "./deals-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findAllDealsThunk = createAsyncThunk(
    "deals/findAll",
    async () => {
        const deals = await dealService.findAllDeals();
        return deals;
    }
);

export const createDealThunk = createAsyncThunk(
    "deals/create",
    async (deal) => {
        const response = await dealService.createDeal(deal);
        return response;
    }
);

export const deleteDealThunk = createAsyncThunk(
    "deals/delete",
    async (id) => {
        await dealService.deleteDeal(id);
        return id;
    }
);

export const findDealByUserIdThunk = createAsyncThunk(
    "deals/findByUserId",
    async (id) => {
        const response = await dealService.findDealByUserId(id);
        return response;
    }
);

export const findDealByRestaurantIdThunk = createAsyncThunk(
    "deals/findByRestaurantId",
    async (id) => {
        const response = await dealService.findDealByRestaurantId(id);
        return response;
    }
);

export const updateDealThunk = createAsyncThunk(
    "deals/update",
    async (deal) => 
        await dealService.updateDeal(deal)
);

