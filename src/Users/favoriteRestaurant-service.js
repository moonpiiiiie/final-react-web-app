import axios from "axios";

const USERS_API_URL = "http://localhost:4000/api/users";

export const favoriteRestaurant = async (userId, restaurantId, restaurantName) => {
    const response = await axios.post(`${USERS_API_URL}/${userId}/favoriteRestaurants/${restaurantId}/${restaurantName}`);
    return response.data;
};

export const unfavoriteRestaurant = async (userId, restaurantId) => {
    const response = await axios.delete(`${USERS_API_URL}/${userId}/favoriteRestaurants/${restaurantId}`);
    return response.data;
};

export const findFavoriteRestaurantsByUserId = async (userId) => {
    const response = await axios.get(`${USERS_API_URL}/${userId}/favoriteRestaurants`);
    return response.data;
};