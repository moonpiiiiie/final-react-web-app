import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { profileThunk, logoutThunk, updateUserThunk } from "../Users/users-thunks";
import { useNavigate, useParams } from "react-router";
import {findUserById} from "../Users/users-service";

function ProfileUidScreen() {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [profile, setProfile] = useState([]);
    const fetchProfile = async () => {
      const user = await findUserById(uid);
      setProfile(user);
    }


   return(
         <div><h1>UIDProfile</h1></div>
   )
}

export default ProfileUidScreen;