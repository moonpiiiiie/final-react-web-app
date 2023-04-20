import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { profileThunk, logoutThunk, updateUserThunk } from "../Users/users-thunks";
import { Link} from "react-router-dom";
import {findFavoriteRestaurantsByUserId} from "../Users/favoriteRestaurant-service.js";
import {findReviewByUserId} from "../Reviews/reviews-service.js";
import {findDealByUserId} from "../Deals/deals-service.js";
import { findFollowedByFollowingThunk } from "./Follow/follows-thunk";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const [followers, setFollowers] = useState([]);

    const fetchProfile = async () => {
        const response = await dispatch(profileThunk());
        setProfile(response.payload);
    };

   /* This is to display user's favorite restaurants*/
   const [favRestaurant, setFavRestaurant] = useState([]);
        const fetchFavoriteRestaurants = async () => {
        const response = await findFavoriteRestaurantsByUserId(profile._id);
        setFavRestaurant(response);
    };

    /* This is to display user's reviews*/
    const [reviews, setReviews] = useState([]);
    const fetchReviews = async () => {
        const response = await findReviewByUserId(profile._id);
        setReviews(response);
    };

     /* This is to display user's deals*/
    const [deals, setDeals] = useState([]);
    const fetchDeals = async () => {
        const response = await findDealByUserId(profile._id);
        setDeals(response);
    };

    const fetchFollowers = async () => {
        const response = await dispatch(findFollowedByFollowingThunk(profile._id));
        setFollowers(response.payload);
    }

    const updateProfile = async () => {
       await dispatch(updateUserThunk(profile));
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    useEffect(() => {
        if (profile) {
            fetchFollowers();
            fetchFavoriteRestaurants();
            fetchReviews();
            fetchDeals();
        }
    }, [profile]);

    return (
        <div className="container-fluid">
            <div>
                {profile && (
                    <div>
                        <h2>Welcome {profile.username}</h2>
                        <span>First Name: {profile.firstName}</span><br/>
                        <span>Last Name: {profile.lastName}</span><br/>
                        <span>Email: {profile.email}</span><br/>
                        {profile.restaurantID && profile.restaurantID !== "" && (
                            <>
                                <span>Restaurant ID: {profile.restaurantID}</span><br/>
                            </>
                        )}

                        {profile.restaurantName && profile.restaurantName !== "" && (
                            <>
                                <span>Restaurant Name: {profile.restaurantName}</span><br/>
                            </>
                        )}
                        <br/>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                              type="text"
                              className="form-control"
                              value={profile.username}
                              onChange={(e) => setProfile({...profile, username: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={profile.firstName}
                              onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={profile.lastName}
                              onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                              type="text"
                              className="form-control"
                              value={profile.password}
                              onChange={(e) => setProfile({...profile, password: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                value={profile.email}
                                onChange={(e) => setProfile({...profile, email: e.target.value})}
                            />
                         </div>
                         <div className=" float-end mt-2" onClick={updateProfile}><button className="btn btn-success">Save</button></div>
                    </div>
                )}
               <br/>

                {followers && profile && profile.role === "USER" && (
                 <div>
                      <h2>Following</h2>
                      <ul className="list-group">
                          {followers.map((follower) => (
                              <li key={follower.following._id} className="list-group-item">
                                  <Link to={`/profile/${follower.followed._id}`}>{follower.followed.username}</Link>
                              </li>
                          ))}
                      </ul>
                      <br/>
                      <h2>My Favorite Restaurants</h2>
                      <ul className="list-group">
                          {favRestaurant.map((item) => (
                              <li className="list-group-item">
                                  <a href={'http://localhost:3000/detail/' + item.restaurantId}>
                                  <h3>{item.restaurantName}</h3>
                                  </a>
                          </li>))}
                      </ul>
                      <br/>
                    <h2>My Reviews</h2>
                    <ul className="list-group">
                            {reviews.map((item) => (
                            <li className="list-group-item">
                                     {item.review}
                                     <a href={'http://localhost:3000/detail/' + item.restaurantID}>
                                        <span>{item.restaurantName}</span>
                                    </a>
                            </li>))}
                    </ul>
                 </div>
                )}

                {deals && profile && profile.role === "OWNER" && (
                    <div>
                        <h2>My Deals</h2>
                        <ul className="list-group">
                            {deals.map((item) => (
                                <li className="list-group-item">
                                     <a href={'http://localhost:3000/detail/' + item.restaurantID}>
                                                                            <td>{item.deal}</td>
                                                                        </a>
                                                                        {console.log(item.restaurantID)}
                                </li>))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileScreen;