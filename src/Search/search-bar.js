import axios from "axios";
import Nav from "../nav";
import React, {useEffect, useState} from "react";
import {useParams } from 'react-router-dom';

/*
    * This component is used to display the search results.
    * Also support search function if user wants to search again.
 */
function SearchList() {
    // set the search context and zip code to the state
    const [search, setSearch] = useState("");
    const [zipCode, setZip] = useState("");
    const [results, setResults] = useState([]);
    const [website, setWebsite] = useState("");

    async function searchYelp() {
        if(search === "" || zipCode === "") {
            alert("Please enter the search context and zip code!");
            return;
        }
         
        // when user click search button, it will redirect to the search page
        setWebsite('http://localhost:3000/search/' + zipCode + '/' + search);

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
            <a href={website}>
                <button onClick={searchYelp}>Search</button>
            </a>
        </div>
    );
}
export default SearchList;