import React, {useState} from "react";
import Nav from "../nav";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunks";
import {useNavigate} from "react-router";
import './index.css';
import {Link} from "react-router-dom";


function LoginScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [test, setTest] =  useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(username, password);
    console.log("result", test)
    const login = async() => {
        setTest("test");
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
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">LOGIN</h2>
                    <div className="card my-5">
                        <div className="card-body cardbody-color">
                            <div className="text-center mb-3">
                                <img src="https://cdn.dribbble.com/users/1201194/screenshots/7197395/media/d5d300c76b56aa290f34cfc39de99c2d.gif"
                                     className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                     width="200px" alt="profile"/>
                            </div>

                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       id="Username"
                                       aria-describedby="emailHelp"
                                       value={username}
                                       onChange={(e) => {
                                           setUsername(e.target.value);
                                       }}
                                       placeholder="User Name"/>
                            </div>

                            <div className="mb-3">
                                <input type="password"
                                       className="form-control"
                                       id="password"
                                       placeholder="Password"
                                       value={password}
                                       onChange={(e) => {
                                           setPassword(e.target.value);
                                       }}
                                />
                            </div>

                            <div className="text-center">
                                <button onClick={login}
                                        type="submit"
                                        className="login-btn-color px-5 mb-5 w-100">Login</button>
                            </div>

                            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                                Registered?
                                <Link to="/register" className="text-dark fw-bold"> Create an
                                    Account</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default LoginScreen;