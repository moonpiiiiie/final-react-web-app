import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Nav() {
    const { currentUser } = useSelector(state => state.users);
    return (
        <div>
            <span>Dog-Friendly Restaurants</span> ||
            <Link to="/">Home</Link> |
            <Link to="/search">Search</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/admin">Admin</Link> |
            {
                !currentUser && (
                    <>
                        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
                    </>
                )
            }
            {
                currentUser && (
                    <Link to="/profile">Profile</Link>
                )
            }
        </div>
    );
}

export default Nav;