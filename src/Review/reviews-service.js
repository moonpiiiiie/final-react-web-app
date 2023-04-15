import axios from "axios";
const REVIEWS_API_URL = "http://localhost:4000/api/reviews";

const api = axios.create({
    withCredentials: true,
});

export const findAllReviews = async () => {
    const response = await axios.get(REVIEWS_API_URL);
    return response.data;
};

export const findReviewByRestaurantId = async (restaurant_id) => {
    const response = await axios.get(`${REVIEWS_API_URL}/restaurant/${restaurant_id}`);
    return response.data;
};

export const findReviewByUserId = async (user_id) => {
    const response = await axios.get(`${REVIEWS_API_URL}/user/${user_id}`);
    return response.data;
};


export const createReview = async (review) => {
    const response = await axios.post(REVIEWS_API_URL, review);
    return response.data;
};

export const deleteReview = async (_id) => {
    const response = await axios.delete(`${REVIEWS_API_URL}/${_id}`);
    console.log("service");
    console.log(response.data);
    debugger;
    return response.data;
};

