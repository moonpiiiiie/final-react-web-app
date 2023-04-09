import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "./users-thunks";
import {useNavigate} from "react-router";
import Nav from "../nav";

function AdminScreen() {
    const {currentUser, users} = useSelector(state => state.users);
    const navigation = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);
    return (
        <div>
            <Nav/>
            <h1>Admin</h1>
            <ul>
                {users && users.map(user => {
                    return (
                        <li key={user.id}>
                            <h2>{user.username}</h2>
                            <h2>{user.firstName}</h2>
                            <h2>{user.lastName}</h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default AdminScreen;