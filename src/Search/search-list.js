import axios from "axios";
import Nav from "../nav";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import YelpItem from "./yelp-item";
import {useParams } from 'react-router-dom';


function SearchList() {
    const {searchContext, zip} = useParams();
    console.log(searchContext + " " + zip);
    if(searchContext === ""){
        searchContext = "restaurants";
    }
    const [search, setSearch] = useState(searchContext);
    const [zipCode, setZip] = useState(zip);
    const [results, setResults] = useState([]);
    const [website, setWebsite] = useState('http://localhost:3000/search/' + zipCode + '/' + search);

    async function searchYelp() {
        setWebsite('http://localhost:3000/search/' + zipCode + '/' + search);
    }

    useEffect(() => {
        const asyncData = async () => {
            console.log(searchContext + " " + zip);
            console.log('http://localhost:4000/api/search/' + zipCode + '/' + search);
            const response = await axios('http://localhost:4000/api/search/' + zipCode + '/' + search);
            setResults(response.data);
        };
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