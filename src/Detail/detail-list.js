import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import DetailItem from "./detail-item";
import {useParams } from 'react-router-dom';

const DETAIL_URL = "http://localhost:4000/api/detail/";

/*
    * This component is used to display restraunt.
 */
function DetailList() {
    const {id} = useParams();
    const [result, setResult] = useState([]);

    useEffect(() => {
        const asyncData = async () => {
            // This is the node API url for detail restraurant informations
            const response = await axios(DETAIL_URL + id);
            setResult(response.data);
        };
        // make sure we only run asyncData() once
        if(result.length === 0){
            asyncData();
        }
    });
    return (

        <ul className="list-group">
            {
                result && <DetailItem result={result}/>
            }
        </ul>
    );
}
export default DetailList;