import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DetailItem from "./detail-item";
import {useParams } from 'react-router-dom';
import {profileThunk} from "../Users/users-thunks";
import { current } from "@reduxjs/toolkit";
import { updateUserThunk } from "../Users/users-thunks";

const DETAIL_URL = "http://localhost:4000/api/detail/";


/*
    * This component is used to display restraunt.
 */
function DetailList() {
    const {id} = useParams();
    const [result, setResult] = useState([]);
    const { currentUser } = useSelector(state => state.users);
    const [profile, setProfile] = useState();


    const dispatch = useDispatch();
    const fetchProfile = async () => {
        const response = await dispatch(profileThunk());
        setProfile(response.payload);
    };
    const loadScreen = async () => {
        await fetchProfile();
    };
     const updateProfile = async () => {
        await dispatch(updateUserThunk({
            ...profile,
            restaurantID: id}));
      };
    useEffect(() => {
        loadScreen();
    }, []);
   
    useEffect(() => {
        const asyncData = async () => {
            // This is the node API url for detail restraurant informations
            const response = await axios(DETAIL_URL + id);
            console.log("react detail-list");
            console.log(response);
            setResult(response.data);

        };
        // make sure we only run asyncData() once
        if(result.length === 0){
            dispatch(profileThunk());
            asyncData();
        }
    },[]);
    return (
    <>
    { (() => {
            if (currentUser && currentUser.role==="OWNER") { 
                if (currentUser.restaurantID===id) {
                    return (<h2>This is your restaurant</h2>)
                } else {
                    return (<button onClick={updateProfile} className="btn btn-primary">This is my restaurant</button>)
                }
            } else {
                return ("")
            }
            })()
    }
        <ul className="list-group">
           {
               result && <DetailItem result={result}/>
           }
       </ul>
    </>
        
    );
}
export default DetailList;