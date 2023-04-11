import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DetailItem from "./detail-item";
import {useParams } from 'react-router-dom';
import {profileThunk} from "../Users/users-thunks";

const DETAIL_URL = "http://localhost:4000/api/detail/";

/*
    * This component is used to display restraunt.
 */
function DetailList() {
    const {id} = useParams();
    const [result, setResult] = useState([]);
    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();

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
    });
    return (

        <ul className="list-group">
            {
                currentUser && currentUser.username
            }
            {
                result && <DetailItem result={result}/>
            }
        </ul>
    );
}
export default DetailList;