import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DealItem from "./deal-item";
import {useParams } from 'react-router-dom';
import {profileThunk} from "../Users/users-thunks";


const ALL_DEAL_URL = "http://localhost:4000/api/deals";

/*
    * This component is used to display restraunt.
 */
function DealList() {
    const {id} = useParams();
    const [result, setResult] = useState([]);
   
   
    const dispatch = useDispatch();
  
    useEffect(() => {
        const asyncData = async () => {
            // This is the node API url for detail restraurant informations
            const response = await axios(ALL_DEAL_URL);
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
        
       
         <div className="mt-3">
            <h1>Recent Deals</h1>  
            <ul className="list-group">
       {
           result && result.map(result =>
               <DealItem result={result}/>)
       }
   </ul></div>
      
        </>
   
    );
}
export default DealList;