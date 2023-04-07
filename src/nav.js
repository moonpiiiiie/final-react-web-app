import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <span>Dog-Friendly Restaurants</span> ||
            <Link to="/">Home</Link> |
            <Link to="/profile">Profile</Link> |
            <Link to="/hello">Hello</Link> |
        </div>
    );
}

export default Nav;