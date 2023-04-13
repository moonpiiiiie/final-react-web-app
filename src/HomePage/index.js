import RestaurantList from "./restaurants-list";
import {Routes, Route} from "react-router";
function HomePage() {
    return (
        <div>
            <h1>Dog-friendly restaurants nearby</h1>
            <Routes>
                <Route path="/" element={<RestaurantList/>}/>
            </Routes>
        </div>
    );
}
export default HomePage;