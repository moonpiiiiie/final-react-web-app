import React, {useState} from "react";
import Nav from "../nav";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunks";
import {useNavigate} from "react-router";


function LoginScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = async() => {
        try {
            if (username === "" || password === "") {
                alert("Please enter your username and password!");
                return;
            }

            const response = await dispatch(loginThunk({ username, password }));
            const type = response.type;
            const status = type.split ("/")[2];
            if (status === "rejected") {
                alert("Username and password do not match.");
                return;
            }
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <div className="form-group">
                <label>Username</label>
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <button onClick={login} className="btn btn-primary">
                Login
            </button>
            <div>
                {currentUser && (
                    <div>
                        <h2>{currentUser.username}</h2>
                        <h2>{currentUser.password}</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginScreen;