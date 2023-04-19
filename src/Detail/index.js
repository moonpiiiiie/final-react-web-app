import axios from "axios";
import React, {useEffect, useState} from "react";
import DetailList from "./detail-list";
import ReviewList from "./review-list";
import DealList from "./deal-list";

function Detail(props) {
    console.log(props + "Detail");
    return (
        <div>
            <DetailList/>
            <DealList/>
            <ReviewList/>
        </div>
    );
}
export default Detail;