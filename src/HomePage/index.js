import RestaurantList from "./restaurants-list";
import {Routes, Route} from "react-router";
import DealList from "./deal-list";
function HomePage() {
    return (
        <div>
            <DealList/>
            <h1>Dog-friendly restaurants nearby</h1>
            
            <Routes>
                
                <Route path="/" element={<RestaurantList/>}/>
            </Routes>
        </div>
    );
}
export default HomePage;