import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "./users-thunks";
import {useNavigate} from "react-router";
import Nav from "../nav";

function AdminScreen() {
    const {currentUser, users} = useSelector(state => state.users);
    const navigation = useNavigate();
    const dispatch = useDispatch();
    // if the current user is not an admin, we will redirect to the login page
    // if (!currentUser || !currentUser.roles.includes("ADMIN")) {
    //     navigation("/login");
    // }
    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);
    return (
        <div>
            <Nav/>
            <h1>Admin</h1>
            <ul className="list-group">
                {users && users.map(user => {
                    return (
                        <li key={user.id} className="list-group-item">
                            <h2>{user.username} | {user.firstName} {user.lastName}</h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default AdminScreen;