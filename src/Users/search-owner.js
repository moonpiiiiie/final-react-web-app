import axios from "axios";
import Nav from "../nav";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useParams, useNavigate} from 'react-router-dom';

const SEARCH_URL = "http://localhost:4000/api/search/";
/*
    * This component is used to display the search results.
    * Also support search function if user wants to search again.
 */
function SearchOwner({setRestaurantD}) {
    // set the search context and zip code to the state
    const [search, setSearch] = useState("");
    const [zipCode, setZip] = useState("");
    const [results, setResults] = useState([]);

    async function searchYelp() {
        if(search === "" || zipCode === "") {
            alert("Please enter the search context and zip code!");
            return;
        }
        try{
            // This is the node API url for search restraurant informations
            const response = await axios(SEARCH_URL + zipCode + '/' + search);
            console.log(response);
            setResults(response.data);

        }catch (e) {
            console.log(e);
        }
    }
    return (
        <div>

            <input
                type = "text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={search}
            />
            <input
                type = "text"
                value={zipCode}
                onChange={(e) => setZip(e.target.value)}
                placeholder={zipCode}
            />

            <button onClick={searchYelp}>Search</button>

            <ul className="list-group">
                {
                    results && results.map(result =>
                                               <li className="list-group-item">
                                                   <div> Name: {result.name}</div>
                                                   <div> Phone: {result.phone}</div>
                                                   <div> Rating: {result.rating}</div>
                                                   <img src={result.image_url} height={300} width={300}/>
                                                   <button onClick={() => setRestaurantD(result.id)}>Select</button>
                                               </li>
                            )
                }
            </ul>
        </div>
    );
}
export default SearchOwner;