import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import DetailItem from "./detail-item";
import DetailList from "./detail-list";
import {useParams } from 'react-router-dom';

function Detail() {
    return (
        <div>
            <DetailList/>
        </div>
    );
}
export default Detail;