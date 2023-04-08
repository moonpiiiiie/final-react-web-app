import axios from "axios";
import Nav from "../nav";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import YelpItem from "./yelp-item";
import {useParams } from 'react-router-dom';
import SearchBar from "./search-bar";

/*
    * This component is empty search page. Will redirect to the search criteria page after click search.
 */
function Search() {
    return (
        <div>
            <Nav/>
            <h1>Search</h1>
            <SearchBar/>
        </div>
    );
}
export default Search;