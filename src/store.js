import { configureStore }
    from '@reduxjs/toolkit';
import usersReducer from "./Users/users-reducer";
import followsReducer from "./Profile/Follow/follows-reducer";

const store = configureStore({
        reducer: {
            users: usersReducer,
            follows: followsReducer
        }
});

export default store;
