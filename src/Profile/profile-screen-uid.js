import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk, logoutThunk, updateUserThunk } from "../Users/users-thunks";
import {useParams} from "react-router";
import {findUserById} from "../Users/users-service";

function ProfileUidScreen() {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const [profile, setProfile] = useState([]);

    const fetchProfile = async () => {
      const user = await findUserById(uid);
      setProfile(user);
    }

    const loadScreen = async () => {
        await fetchProfile();
    };

    useEffect(() => {
        loadScreen();
    }, []);

   return(
         <div>
         <h1>{profile._id} Profile</h1>

         </div>
   )
}

export default ProfileUidScreen;