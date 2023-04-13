import axios from "axios";
import React, {useEffect, useState} from "react";
import RestaurantItem from "./restaurants-item";


const SEARCH_URL = "http://localhost:4000/api/search/";
/*
    * This component is used to display the search results. 
    * Also support search function if user wants to search again.
 */
function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    const [isRunEffect, setIsRunEffect] = useState(false);



    useEffect(() => {
        const asyncData = async () => {
            setIsRunEffect(true);
            try{
                // This is the node API url for search restraurant informations
                const response = await axios(SEARCH_URL + '95113' + '/' + 'restaurant');
                console.log(response.data);
                setRestaurants(response.data);
            }catch (e) {
                console.log(e);
            }
        };
        // make sure we only run asyncData() once
        if(isRunEffect == false){
            asyncData();
        }
    });

    return (
        <div >

            <div className="row">
                {
                    restaurants && restaurants.map(Restaurant =>
                                               <RestaurantItem restaurant={Restaurant}/>)
                }
            </div>

        </div>
    );
}
export default RestaurantList;