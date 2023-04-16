import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "./Users/users-reducer";
import restaurantsReducer from "./Restaurants/restaurants-reducer";
import reviewsReducer from "./Reviews/reviews-reducer";
import dealsReducer from './Deals/deals-reducer';

const store = configureStore({
        reducer: {
            users: usersReducer,
            restaurants: restaurantsReducer,
            reviews: reviewsReducer,
            deals: dealsReducer
        }
});

export default store;