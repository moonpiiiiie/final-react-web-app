import axios from "axios";
import Nav from "../nav";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import YelpItem from "./yelp-item";
import {useParams } from 'react-router-dom';

/*
    * This component is used to display the search results. 
    * Also support search function if user wants to search again.
 */
function SearchList() {
    // get the search context and zip code from the url
    const {searchContext, zip} = useParams();
   
    // set the search context and zip code to the state
    const [search, setSearch] = useState(searchContext);
    const [zipCode, setZip] = useState(zip);
    const [results, setResults] = useState([]);
    const [website, setWebsite] = useState('http://localhost:3000/search/' + zipCode + '/' + search);

    async function searchYelp() {
        if(search === "" || zipCode === "") {
            alert("Please enter the search context and zip code!");
            return;
        }

        // when user click search button, it will redirect to the search page
        setWebsite('http://localhost:3000/search/' + zipCode + '/' + search);

    }

    useEffect(() => {
        const asyncData = async () => {
            try{
                // This is the node API url for search restraurant informations
                const response = await axios('http://localhost:4000/api/search/' + zipCode + '/' + search);
                setResults(response.data);
            }catch (e) {
                console.log(e);
            }
        };
        // make sure we only run asyncData() once
        if(results.length === 0){
            asyncData();
        }
    });

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
            <a href={website}>
                <button onClick={searchYelp}>Search</button>
            </a>

            <ul className="list-group">
                {
                    results && results.map(result =>
                                               <YelpItem result={result}/>)
                }
            </ul>

        </div>
    );
}
export default SearchList;