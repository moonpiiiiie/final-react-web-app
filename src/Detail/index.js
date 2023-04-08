import axios from "axios";
import Nav from "../nav";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import DetailItem from "./detail-item";
import DetailList from "./detail-list";
import {useParams } from 'react-router-dom';

function Detail() {
    return (
        <div>
            <Nav/>
            <h1>Detail</h1>
            <DetailList/>
        </div>
    );
}
export default Detail;