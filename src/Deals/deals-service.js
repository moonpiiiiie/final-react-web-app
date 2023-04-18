import axios from "axios";
const DEALS_API_URL = "http://localhost:4000/api/deals";

const api = axios.create({
    withCredentials: true,
});

export const findAllDeals = async () => {
    const response = await axios.get(DEALS_API_URL);
    return response.data;
};

export const findDealByRestaurantId = async (restaurant_id) => {
    const response = await axios.get(`${DEALS_API_URL}/restaurant/${restaurant_id}`);
    return response.data;
};

export const findDealByUserId = async (user_id) => {
    const response = await axios.get(`${DEALS_API_URL}/user/${user_id}`);
    return response.data;
};


export const createDeal = async (deal) => {
    const response = await axios.post(DEALS_API_URL, deal);
    return response.data;
};

export const deleteDeal = async (_id) => {
    const response = await axios.delete(`${DEALS_API_URL}/${_id}`);
    return response.data;
};


export const updateDeal = async (deal) => {
    const response = await axios.put(`${DEALS_API_URL}/${deal._id}`, deal);
    return response.data;
};
