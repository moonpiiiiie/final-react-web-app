import axios from "axios";
import React, { useEffect, useState } from "react";
import RestaurantItem from "./restaurants-item";
import { useSelector } from "react-redux";


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
            try {
                // This is the node API url for search restraurant informations
                const response = await axios(SEARCH_URL + zipcode + '/' + 'restaurant');
                setRestaurants(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        // make sure we only run asyncData() once
        if (isRunEffect == false) {
            asyncData();
        }
    });
    const { currentUser } = useSelector(state => state.users);

    const zipcode = currentUser ? currentUser.zipcode : '95113';

    return (
        <div className="m-3">

            <div className="row">
                <h1>Dog-friendly restaurants nearby</h1>
                {
                    restaurants && restaurants.map(Restaurant =>
                        <RestaurantItem restaurant={Restaurant} />)
                }
            </div>

        </div>
    );
}
export default RestaurantList;