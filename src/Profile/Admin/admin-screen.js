import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../../Users/users-thunks";
import {useNavigate} from "react-router";
import Nav from "../../nav";
import {findUserById} from "../../Users/users-service";
import {updateUserThunk} from "../../Users/users-thunks";
import {updateAllUsers} from "../../Users/users-reducer";
import * as userService from "../../Users/users-service";

function AdminScreen() {
    const {currentUser, users} = useSelector(state => state.users);
    const [allUsers, setAllUsers] = useState(users);
    const navigation = useNavigate();
    const dispatch = useDispatch();


    const canReviewToggle = async(user, canReview) => {
       await updateUser({...user, canReview: canReview});
    }

    const updateUser = async (user) => {
        await userService.updateOtherUser(user);
        await dispatch(updateAllUsers(users.map(u => {
           if (u._id === user._id) {
               u = user;
           }
           return u;
       })));
    }

    useEffect(() => {
        dispatch(findAllUsersThunk());
        setAllUsers(users);
    }, []);

    useEffect(() => {
        setAllUsers(users);
    }, [users]);

    return (
        <div>
            <h1>Admin</h1>
            <ul className="list-group">
                {allUsers && allUsers.filter(user => user.role === "USER").map(user => {
                    return (
                        <li key={user._id} className="list-group-item m-2">
                           {user.canReview && <button className="btn btn-danger float-end m-1" onClick={()=>(canReviewToggle(user, false))}>Mute</button>}
                            {!user.canReview &&<button className="btn btn-success float-end m-1" onClick={()=>(canReviewToggle(user, true))}>Unmute</button>}
                            <h3>{user.username} | {user.role}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default AdminScreen;