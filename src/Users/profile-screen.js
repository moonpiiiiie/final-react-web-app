import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { profileThunk, logoutThunk} from "./users-thunks";
import {useNavigate} from "react-router";
import Nav from "../nav";


// This is to display user's favorite restaurants
import {findFavoriteRestaurantsByUserId} from "./favoriteRestaurant-service.js";

function ProfileScreen() {
    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    /* This is to display user's favorite restaurants*/
    const [favRestaurant, setFavRestaurant] = useState([]);
    const fetchFavoriteRestaurants = async () => {
        const response = await findFavoriteRestaurantsByUserId(currentUser._id);
        setFavRestaurant(response);
    };
   /* This is to display user's favorite restaurants*/
    useEffect(() => {
        dispatch(profileThunk());
        fetchFavoriteRestaurants();
    }, []);
    return (
        <div>
            <div>
                {currentUser && (
                    <div>
                        <h2>Welcome {currentUser.username}</h2>
                        <span>First Name: {currentUser.firstName}</span><br/>
                        <span>Last Name: {currentUser.lastName}</span><br/>
                        <span>Password: {currentUser.password}</span><br/>
                        <span>Email: {currentUser.email}</span><br/>
                        <span>Role: {currentUser.role}</span><br/>
                        {currentUser.restaurantID && currentUser.restaurantID !== "" && (
                            <>
                                <span>Restaurant ID: {currentUser.restaurantID}</span><br/>
                            </>
                        )}

                        {currentUser.restaurantName && currentUser.restaurantName !== "" && (
                            <>
                                <span>Restaurant Name: {currentUser.restaurantName}</span><br/>
                            </>
                        )}
                        {/* This is to display user's favorite restaurants */}
                        <ul>
                            {favRestaurant.map((item) => (
                                <li className="list-group-item">
                                    <h3>{item.restaurantName}</h3>
                                </li>))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileScreen;