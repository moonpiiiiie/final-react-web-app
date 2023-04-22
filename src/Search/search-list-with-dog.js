import axios from "axios";
import Nav from "../nav";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import SearchItem from "./search-item";
import {useParams, useNavigate} from 'react-router-dom';

const SEARCH_URL = "http://localhost:4000/api/search/";
/*
    * This component is used to display the search results.
    * Also support search function if user wants to search again.
 */
function SearchListWithDog() {
    // get the search context and zip code from the url
    const {searchContext, zip} = useParams();

    const navigate = useNavigate();

    // set the search context and zip code to the state
    const [search, setSearch] = useState(searchContext);
    const [zipCode, setZip] = useState(zip);
    const [results, setResults] = useState([]);
    const [isRunEffect, setIsRunEffect] = useState(false);

    async function searchYelp() {
        if(search === "" || zipCode === "") {
            alert("Please enter the search context and zip code!");
            return;
        }

        // when user click search button, it will redirect to the search page and reload the page
        navigate(`/search/${zipCode}/${search}`);
        window.location.reload();
    }

    useEffect(() => {
        const asyncData = async () => {
            setIsRunEffect(true);
            try{
                // This is the node API url for search restraurant informations
                const response = await axios(SEARCH_URL + zipCode + '/' + search);
                console.log(response);
                setResults(response.data);
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
            <div className="input-group">
                <input
                    className={"form-control"}
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={"restraunt name"}

                />
                <input
                    className={"form-control"}
                    type = "text"
                    value={zipCode}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder={"zip code/city name"}
                />
                <button type="button" className="btn btn-outline-primary" onClick={searchYelp}>
                    Search</button>
            </div>

            <div className="row">
                {
                    results && results.map(result =>
                                               <SearchItem result={result}/>)
                }
            </div>
            {/*follow instruction in "https://www.youtube.com/watch?v=gtl2ufc3_-c" to add dog*/}
            <div className="dog d-none d-sm-block">
                <div className="body"></div>
                <div className="leg1"></div>
                <div className="leg2"></div>
                <div className="leg3"></div>
                <div className="leg4"></div>
                <div className="tail"></div>
                <div className="ear"></div>
                <div className="nose"></div>
                <div className="eye"></div>
                <div className="tongue"></div>
            </div>
        </div>
    );
}
export default SearchListWithDog;