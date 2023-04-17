import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { profileThunk, logoutThunk, updateUserThunk } from "../Users/users-thunks";
import {useNavigate} from "react-router";


function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    console.log("currentUser", currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchProfile = async () => {
        const response = await dispatch(profileThunk());
        //initially profile is null
        //if profile is null, set profile to response.payload
        //so that the useEffect will not be called again

        setProfile(response.payload);

    };
    const loadScreen = async () => {
        await fetchProfile();
    };
     const updateProfile = async () => {
        await dispatch(updateUserThunk(profile));
      };
    useEffect(() => {
        loadScreen();
    }, []);

    return (
        <div>
            <div>
                {profile && (
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
            </div>
        </div>
    );
}

export default ProfileScreen;