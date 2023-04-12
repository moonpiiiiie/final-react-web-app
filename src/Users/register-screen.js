import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunks";
import {useNavigate} from "react-router";
import SearchOwner from "./search-owner";


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
                    navigate("/profile");
                }
            } else {
                if (username === "" || password === "" || firstName === "" || lastName === "" || email === "" || role === "" || zipcode === "") {
                    alert("Please enter all the information!");
                } else {
                    dispatch(registerThunk({ username, password, firstName,lastName, email, role, zipcode }));
                    navigate("/profile");
                }
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <h1>Register</h1>
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
            </div><br/>

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
            </div><br/>

            <div className="form-group">
                <label>First Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                />
            </div><br/>

            <div className="form-group">
                <label>Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                />
            </div><br/>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div><br/>

            <div className="form-group">
                <label>ZIP Code</label>
                <input
                    type="zipcode"
                    className="form-control"
                    value={zipcode}
                    onChange={(e) => {
                        setZipCode(e.target.value);
                    }}
                />
            </div><br/>

            <div className="form-group">
                <label>Role</label><br/>

                <input type="radio"
                       value="USER"
                       name="radio-genre"
                       id="radio-user"
                       onChange={(e) => {
                           setRole(e.target.value);
                       }}
                />
                <label htmlFor="radio-user">User</label><br/>

                <input type="radio"
                       value="ADMIN"
                       name="radio-genre"
                       id="radio-admin"
                       onChange={(e) => {
                           setRole(e.target.value);
                       }}
                />
                <label htmlFor="radio-admin">Admin</label><br/>

                <input type="radio"
                       value="OWNER"
                       name="radio-genre"
                       id="radio-owner"
                       onChange={(e) => {
                           setRole(e.target.value);
                       }}
                />
                <label htmlFor="radio-owner">Restaurant Owner</label><br/>
            </div><br/>

            {role === "OWNER" && (
                <>
                    <span>Find Your Restaurant</span>
                    <SearchOwner setRestaurantID={setRestaurantID} setRestaurantName={setRestaurantName} />
                    <span>Your Restaurant is: {restaurantName}</span> <br/>
                </>
            )}

            <button onClick={register} className="btn btn-primary mt-2">
                Register
            </button>
        </div>
    );
}

export default RegisterScreen;