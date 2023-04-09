import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { profileThunk, logoutThunk} from "./users-thunks";
import {useNavigate} from "react-router";

function ProfileScreen() {
    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(profileThunk());
    }, []);
    return (
        <div>
            <h1>Profile Screen</h1>
            <div>
                {currentUser && (
                    <div>
                        <h2>Welcome {currentUser.firstName}</h2>
                        <h2>{currentUser.lastName}</h2>
                    </div>
                )}
            </div>
            <button className="btn btn-danger" onClick={() => {
                dispatch(logoutThunk());
                // if log out, we will return to the home page
                navigate("/");
            }}>Logout</button>
        </div>
    );
}

export default ProfileScreen;