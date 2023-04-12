import React from "react";
import './nav.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./Users/users-thunks";
import {useLocation, useNavigate} from "react-router";

function Nav() {
    // find the name of this web
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[1];
    console.log("active", active)

    // find the current user
    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                {
                    !currentUser && (
                        <a className="navbar-brand">Dog-Friendly Restaurants</a>
                    )
                }

                {
                    currentUser && (
                        <a className="navbar-brand">Hi {currentUser.username}</a>
                    )
                }
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav nav-pills card-header-pills me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link ${active === ''?'active':''}`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search" className={`nav-link ${active === 'search'?'active':''}`}>Search</Link>
                        </li>
                        {
                            currentUser && currentUser.role === "ADMIN" && (
                                <>
                                    <li className="nav-item">
                                        <Link to="/admin" className={`nav-link ${active === 'admin'?'active':''}`}>Admin</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            !currentUser && (
                                <>
                                    <li className="nav-item">
                                        <Link to="/login" className={`nav-link ${active === 'login'?'active':''}`}>Login</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/register" className={`nav-link ${active === 'register'?'active':''}`}>Register</Link>
                                    </li>
                                </>
                            )
                        }

                        {
                            currentUser && (
                                <>
                                    <li className="nav-item">
                                        <Link to="/profile" className={`nav-link ${active === 'profile'?'active':''}`}>Profile</Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                    <form className="d-flex" role="search">
                        {
                            currentUser && (
                                <>
                                    <div className="d-grid gap-2 d-md-flex">
                                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={() => {
                                            dispatch(logoutThunk());
                                            // if log out, we will return to the home page
                                            navigate("/");
                                        }}>Logout</button>
                                    </div>
                                </>
                            )
                        }
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Nav;