import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk, logoutThunk, updateUserThunk } from "../Users/users-thunks";
import {useParams} from "react-router";
import {findUserById} from "../Users/users-service";
import { useNavigate } from "react-router-dom";
import {createFollowThunk, findFollowersByFollowedThunk, findFollowedByFollowingThunk, unfollowThunk, findIsFollowedByIdThunk} from "./Follow/follows-thunk";

function ProfileUidScreen() {
    const {uid} = useParams();
    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const [isFollowed, setIsFollowed] = useState(false);

    const fetchProfile = async () => {
        const user = await findUserById(uid);
        await setProfile(user);
        await dispatch(profileThunk());
    }

    const follow = async () => {
        await dispatch(createFollowThunk({followed: uid, following: currentUser._id}));//currentUser follow other user
        await isFollow();
    }

    const isFollow = async () => {
        const response = await dispatch(findIsFollowedByIdThunk({followed: uid, following: currentUser._id}));
        if (response.payload) {
            setIsFollowed(true);
            return true;
        } else {
            setIsFollowed(false);
            console.log("checkisFollowed :", isFollowed);
            return false;
        }
    }

    const unfollow = async () => {
      console.log("unfollow", uid, currentUser._id);
       await dispatch(unfollowThunk({followed: uid, following: currentUser._id}));//currentUser unfollow other user
       await isFollow();
    }

    const loadScreen = async () => {
        await fetchProfile();
    };

    useEffect(() => {
        loadScreen();
    }, []);

   return(
         <div>
             {profile && (
                 <div>
                     <h1>{profile.username} Profile</h1>
                     { !isFollowed && <button className="btn btn-success" onClick={() => (currentUser ? follow() : navigate("/login"))}>Follow</button>}
                     { isFollowed && <button className="btn btn-danger"onClick={unfollow}>Unfollow</button>}
                </div>

             )}
         </div>
   )
}

export default ProfileUidScreen;