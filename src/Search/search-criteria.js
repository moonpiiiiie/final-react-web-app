import axios from "axios";
import Nav from "../nav";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import YelpItem from "./yelp-item";
import {useParams } from 'react-router-dom';
import SearchList from "./search-list";

function SearchCriteria() {
    return (
        <div>
            <Nav/>
            <h1>Search</h1>
            <SearchList/>
        </div>
    );
}
export default SearchCriteria;