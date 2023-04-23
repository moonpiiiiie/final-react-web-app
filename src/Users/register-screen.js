import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunks";
import {useNavigate} from "react-router";
import SearchOwner from "./search-owner";
import {Link} from "react-router-dom";
import './index.css';


function RegisterScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [restaurantID, setRestaurantID] = useState("");
    const [restaurantName, setRestaurantName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const register = () => {
        try {
            if (role === "OWNER") {
                if (username === "" || password === "" || firstName === "" || lastName === "" || email === "" || role === "" || restaurantID === "" || restaurantName === "" || zipcode === "") {
                    alert("Please enter all the information!");
                } else {
                    dispatch(registerThunk({ username, password, firstName,lastName, email, role, restaurantID, restaurantName, zipcode }));
                    navigate("/");
                }
            } else {
                if (username === "" || password === "" || firstName === "" || lastName === "" || email === "" || role === "" || zipcode === "") {
                    alert("Please enter all the information!");
                } else {
                    dispatch(registerThunk({ username, password, firstName,lastName, email, role, zipcode }));
                    navigate("/");
                }
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">REGISTER</h2>
                    <div className="card my-5">
                        <div className="card-body cardbody-color ">
                            <div className="text-center mb-3">
                                <img src="https://cdn.dribbble.com/users/1201194/screenshots/7197395/media/d5d300c76b56aa290f34cfc39de99c2d.gif"
                                     className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                     width="200px" alt="profile"/>
                            </div>

                            <div className="row">
                            <div className="mb-3 col-6">
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

                            <div className="mb-3 col-6">
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
                            </div>

                            <div className="row">
                            <div className="mb-3 col-6">
                                <input
                                    placeholder="First Name"
                                    type="text"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-3 col-6">
                                <input
                                    placeholder="Last Name"
                                    type="text"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}
                                />
                            </div>
                            </div>

                            <div className="mb-3">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    placeholder="Zip Code"
                                    type="zipcode"
                                    className="form-control"
                                    value={zipcode}
                                    onChange={(e) => {
                                        setZipCode(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="form-group row">
                                <div className="col-3">
                                    <input type="radio"
                                           value="USER"
                                           name="radio-genre"
                                           id="radio-user"
                                           onChange={(e) => {
                                               setRole(e.target.value);
                                           }}
                                    />
                                    <label htmlFor="radio-user" className="ms-1">User</label><br/>
                                </div>

                                <div className="col-4">
                                    <input type="radio"
                                           value="ADMIN"
                                           name="radio-genre"
                                           id="radio-admin"
                                           onChange={(e) => {
                                               setRole(e.target.value);
                                           }}
                                    />
                                    <label htmlFor="radio-admin" className="ms-1">Admin</label><br/>
                                </div>

                                <div className="col-5">
                                    <input type="radio"
                                           value="OWNER"
                                           name="radio-genre"
                                           id="radio-owner"
                                           onChange={(e) => {
                                               setRole(e.target.value);
                                           }}
                                    />
                                    <label htmlFor="radio-owner" className="ms-1">Restaurant Owner</label><br/>
                                </div>
                            </div><br/>

                            {role === "OWNER" && (
                                <>
                                    <span>Find Your Restaurant: {restaurantName}</span>
                                    <SearchOwner setRestaurantID={setRestaurantID} setRestaurantName={setRestaurantName} /> <br/>
                                </>
                            )}

                            <div className="text-center">
                                <button onClick={register}
                                        type="submit"
                                        className="login-btn-color px-5 mb-5 w-100">Register</button>
                            </div>

                            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Have An Account?
                                <Link to="/login" className="text-dark fw-bold"> Login</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RegisterScreen;