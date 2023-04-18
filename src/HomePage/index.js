import RestaurantList from "./restaurants-list";
import {Routes, Route} from "react-router";
import DealList from "./deal-list";
function HomePage() {
    return (
        <div>
            <DealList/>
            <Routes>
                <Route path="/" element={<RestaurantList/>}/>
            </Routes>
        </div>
    );
}
export default HomePage;