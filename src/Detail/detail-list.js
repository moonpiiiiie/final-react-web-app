import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DetailItem from "./detail-item";
import {useParams } from 'react-router-dom';
import {profileThunk} from "../Users/users-thunks";

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
    // const updateProfile = async () => {
    //     await dispatch(updateUserThunk({
    //         ...profile,
    //         restaurantID: id}));
    // };

    const favRestaurant = async () => {
        // await dispatch(updateUserThunk({
        //     ...profile,
        //     favRestaurants: [...profile.favRestaurants, id]}));
        //     console.log(profile);
        //     console.log(profile.favRestaurants);
        //     debugger;
    };

    const unFavRestaurant = async () => {
        // await dispatch(updateUserThunk({
        //     ...profile,
        //     favRestaurants: profile.favRestaurant.filter((item) => item !== id)}));
    };
    useEffect(() => {
        loadScreen();
    }, []);
   
    useEffect(() => {
        const asyncData = async () => {
            // This is the node API url for detail restraurant informations
            const response = await axios(DETAIL_URL + id);
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
    {/* { (() => {
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
    } */}

        <ul className="list-group">
           {
               result && <DetailItem result={result}/>
           }
       </ul>
       <div>
    { (() => {
            if (currentUser && currentUser.role==="USER") { 
                if (currentUser.favRestaurants.includes(id)) {
                    return (<div className="m-2"> <i class="bi bi-star-fill" onClick={unFavRestaurant}> Liked the restaurant</i></div>)
                } else {
                    return (<div className="m-2"> <i class="bi bi-star" onClick={favRestaurant}> Like the restaurant</i></div>)
                }
            } 
            })()
    }
    </div>
    </>
        
    );
}
export default DetailList;