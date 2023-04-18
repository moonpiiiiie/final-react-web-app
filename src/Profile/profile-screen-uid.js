import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk, logoutThunk, updateUserThunk } from "../Users/users-thunks";
import {useParams} from "react-router";
import {findUserById} from "../Users/users-service";
import { useNavigate, Link } from "react-router-dom";
import {reactLocalStorage} from 'reactjs-localstorage';
import {createFollowThunk, findFollowingByFollowedThunk, unfollowThunk, findIsFollowedByIdThunk} from "./Follow/follows-thunk";

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
        // await dispatch(profileThunk());
    }

    const follow = async () => {
        await dispatch(createFollowThunk({followed: uid, following: currentUser._id}));//currentUser follow other user
        await isFollow();
        await fetchFollowers();
    }

    const isFollow = async () => {
        const response = await dispatch(findIsFollowedByIdThunk({followed: uid, following: currentUser._id}));
        console.log("isfollow response", response.payload);
        if (response.payload) {
            setIsFollowed(true);
            return true;
        } else {
            setIsFollowed(false);
            return false;
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
        if (!currentUser) {
            loadScreen();
        }
        if (currentUser) {
            isFollow();
        }
    }, [currentUser, uid, isFollowed]);

   return(
         <div>
             {(profile && currentUser) && (
                <div>
                     <div>
                         <h1>{profile.username} Profile</h1>
                         {!isFollowed && <button className="btn btn-success" onClick={() => (currentUser ? follow() : navigate("/login"))}>Follow</button>}
                         {isFollowed && <button className="btn btn-danger"onClick={unfollow}>Unfollow</button>}
                    </div>
                    <div>
                        <h2>Followers</h2>
                        <ul className="list-group">
                            {followers.map((follower) => (
                                <li className="list-group-item">
                                    <Link to={`/profile/${follower.following._id}`}>{follower.following.username}</Link>
                                </li>
                            ))}
                        </ul>
                   </div>
               </div>
             )}
         </div>
   )
}

export default ProfileUidScreen;