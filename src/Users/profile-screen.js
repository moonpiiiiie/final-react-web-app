import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { profileThunk, logoutThunk} from "./users-thunks";
import {findReviewByUserId} from "../Reviews/reviews-service.js";
import {findDealByUserId} from "../Deals/deals-service.js";
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

    /* This is to display user's reviews*/
    const [reviews, setReviews] = useState([]);
    const fetchReviews = async () => {
        const response = await findReviewByUserId(currentUser._id);
        setReviews(response);
    };
    /* This is to display user's reviews*/

    /* This is to display user's deals*/
    const [deals, setDeals] = useState([]);
    const fetchDeals = async () => {
        const response = await findDealByUserId(currentUser._id);
        setDeals(response);
    };
    /* This is to display user's deals*/

    useEffect(() => {
        dispatch(profileThunk());
        fetchFavoriteRestaurants();
        fetchReviews();
        fetchDeals();
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
                                    <a href={'http://localhost:3000/detail/' + item.restaurantId}>
                                    <h3>{item.restaurantName}</h3>
                                    </a>   
                            </li>))}
                        </ul>
                        {/* This is to display user's favorite restaurants */}
                        {/* This is to display user's reviews */}
                            <table>
                             <thead>
                                <tr>
                                    <th>Review</th>  
                                    <th>Restaurant</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((item) => (
                                    <tr>
                                        <td>{item.review}</td>

                                     <a href={'http://localhost:3000/detail/' + item.restaurantID}>
                                        <td>{item.restaurantName}</td>
                                    </a>  
                                    </tr>
                                ))}
                            </tbody>
                            </table>    
                        {/* This is to display user's reviews */}
                         {/* This is to display user's reviews */}
                         <table>
                             <thead>
                                <tr>
                                    <th>Deals</th>  
                                </tr>
                            </thead>
                            <tbody>
                                {deals.map((item) => (
                                    <tr>
                    

                                     <a href={'http://localhost:3000/detail/' + item.restaurantID}>
                                        <td>{item.deal}</td>
                                    </a>  
                                    </tr>
                                ))}
                            </tbody>
                            </table>    
                        {/* This is to display user's reviews */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileScreen;