import axios from "axios";
import React, {useEffect, useState} from "react";
import DetailList from "./detail-list";
import ReviewList from "./review-list";

import {useParams } from 'react-router-dom';

function Detail() {
    return (
        <div>
            <DetailList/>
            <ReviewList/>
        </div>
    );
}
export default Detail;