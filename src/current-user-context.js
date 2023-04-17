import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {profileThunk} from "./Users/users-thunks";

function CurrentUserContext({ children }) {
    const dispatch = useDispatch();
    const fetchProfile = async () => {
        await dispatch(profileThunk());
    }
    useEffect(() => {
        fetchProfile();
    }, []);
    return children;
}

export default CurrentUserContext;