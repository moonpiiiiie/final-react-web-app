import React, {useState} from "react";
import Nav from "../nav";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunks";
import {useNavigate} from "react-router";


function LoginScreen() {
    const {currentUser} = useSelector(state => state.users);
    console.log(currentUser);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = () => {
        try {
            dispatch(loginThunk(username, password));
            // navigate("/profile");
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <Nav/>
            <h1>Login</h1>
            <div className="form-group">
                <label >Username</label>
                <input type="text"
                       className="form-control"
                       placeholder="Enter username"
                       value={username}
                       onChange={(event) => setUsername(event.target.value)}/>

                <label >Password</label>
                <input type="password"
                       className="form-control"
                       placeholder="Enter password"
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <button onClick={login} className="btn btn-primary">Login</button>
            <div>
                {currentUser && (
                    <div>
                        <h1>Logged in as {currentUser.username}</h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginScreen;