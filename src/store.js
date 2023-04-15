import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "./Users/users-reducer";
import restaurantsReducer from "./Restaurants/restaurants-reducer";
import reviewsReducer from "./Review/reviews-reducer";

const store = configureStore({
        reducer: {
            users: usersReducer,
            restaurants: restaurantsReducer,
            reviews: reviewsReducer
        }
});

export default store;