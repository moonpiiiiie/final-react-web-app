import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk, logoutThunk, updateUserThunk } from "../Users/users-thunks";
import {useParams} from "react-router";
import {findUserById} from "../Users/users-service";
import { useNavigate, Link } from "react-router-dom";
import {findFavoriteRestaurantsByUserId} from "../Users/favoriteRestaurant-service.js";
import {createFollowThunk, findFollowingByFollowedThunk, unfollowThunk, findIsFollowedByIdThunk} from "./Follow/follows-thunk";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import "./index.css";


function ProfileUidScreen() {
    const {uid} = useParams();
    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const [isFollowed, setIsFollowed] = useState(null);
    const [followers, setFollowers] = useState([]);


    const fetchProfile = async () => {
        const user = await findUserById(uid);
        await setProfile(user);
    }

    /* This is to display user's favorite restaurants*/
    const [favRestaurant, setFavRestaurant] = useState([]);
    const fetchFavoriteRestaurants = async () => {
    const response = await findFavoriteRestaurantsByUserId(uid);
    setFavRestaurant(response);
    };

    const follow = async () => {
        await dispatch(createFollowThunk({followed: uid, following: currentUser._id}));//currentUser follow other user
        await isFollow();
        await fetchFollowers();
    }

    const isFollow = async () => {
        const response = await dispatch(findIsFollowedByIdThunk({followed: uid, following: currentUser._id}));
        if (response.payload) {
            setIsFollowed(true);
        } else {
            setIsFollowed(false);
        }
    }

    const unfollow = async () => {
        await dispatch(unfollowThunk({followed: uid, following: currentUser._id}));//currentUser unfollow other user
        await isFollow();
        await fetchFollowers();
    }

    const fetchFollowers = async () => {
        const response = await dispatch(findFollowingByFollowedThunk(uid))
        setFollowers(response.payload);
    }

    const loadScreen = async () => {
        await fetchProfile();
        await fetchFollowers();
    };

    useEffect(() => {
        loadScreen();
        if (currentUser) {
            isFollow();
            fetchFavoriteRestaurants();
        }
    }, [currentUser, uid, isFollowed]);

   return(
         <div className="container-fluid">
             {profile && (
                <div>
                     <div className="row mt-5 header-border">
                         <div className="col-9 d-inline-flex">
                         {profile.username && <Avatar sx={{ bgcolor: deepPurple[500],  width: 70, height: 70 }}>{profile.username.substring(0, 1)}</Avatar>}
                         <span className="ms-4"><h1 className="display-4">{profile.username} Profile</h1></span>

                         </div>
                         <div className="col-3 mt-5">
                         {(currentUser === null || (currentUser && currentUser.role === "USER" && !isFollowed)) && <button className="btn btn-light"
                             onClick={() => (currentUser ? follow() : navigate("/login"))}>Follow</button>}
                         {currentUser && currentUser.role === "USER" && isFollowed && <button className="btn btn-danger"
                             onClick={unfollow}>Unfollow</button>}

                         </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4">
                            <h2><i class="bi bi-person-plus me-2"></i>Followers</h2>
                            <ul className="list-group border-round">
                                {followers.map((follower) => (
                                    <li key={follower.following._id} className="list-group-item">
                                        <Link to={`/profile/${follower.following._id}`}>
                                            <span className="fo-color">{follower.following.username}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                       </div>

                       <div className="col-8">
                       <h2><i class="bi bi-heart-fill text-danger me-2"></i>Favorite Restaurants</h2>
                       <ul className="list-group rounded-10">
                           {favRestaurant.map((item) => (
                               <li className="list-group-item">
                                   <a href={'http://localhost:3000/detail/' + item.restaurantId}>
                                   <span className="res-font">{item.restaurantName}</span>
                                   </a>
                           </li>))}
                       </ul>
                      </div>
                  </div>
               </div>
             )}
         </div>
   )
}

export default ProfileUidScreen;