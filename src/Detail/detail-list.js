import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import DetailItem from "./detail-item";
import {useParams } from 'react-router-dom';

function DetailList() {
    const {id} = useParams();
    const [result, setResult] = useState([]);

    useEffect(() => {
        const asyncData = async () => {
            console.log(id);
            console.log('http://localhost:4000/api/detail/' + id);
            const response = await axios('http://localhost:4000/api/detail/' + id);
            console.log(response);
            setResult(response.data);
        };
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