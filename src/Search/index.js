import axios from "axios";
import Nav from "../nav";
import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router";
import {useDispatch} from "react-redux";
import YelpItem from "./yelp-item";
import {useParams } from 'react-router-dom';
import SearchList from "./search-list";

/*
    * This component is empty search page. Will redirect to the search criteria page after click search.
 */
function Search() {
    return (
        <div>
            <Nav/>
            <h1>Search</h1>
            <Routes>
                <Route path="/" element={<SearchList/>}/>
                <Route path=":zip/:searchContext" element={<SearchList/>}/>
            </Routes>
        </div>
    );
}
export default Search;