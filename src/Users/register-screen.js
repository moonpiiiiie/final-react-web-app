import React, {useState} from "react";
import Nav from "../nav";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunks";
import {useNavigate} from "react-router";


function RegisterScreen() {
    const { currentUser } = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const register = () => {
        try {
            dispatch(registerThunk({ username, password, firstName,lastName, email, role }));
            navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    };
    console.log(role)
    return (
        <div>
            <Nav/>
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
            </div>
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
            </div>
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
            </div>
            <div className="form-group">
                <label>Role</label><br/>

                <input type="radio"
                       value="USER"
                       name="radio-genre"
                       id="radio-user"
                       checked
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
                <label htmlFor="radio-owner">Restaurant Owner</label><br/><br/>
            </div>
            <button onClick={register} className="btn btn-primary">
                Register
            </button>
        </div>
    );
}

export default RegisterScreen;