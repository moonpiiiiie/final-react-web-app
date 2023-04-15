import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewItem from "./review-item";
import {useParams } from 'react-router-dom';
import {profileThunk} from "../Users/users-thunks";
import { createReviewThunk, findReviewByRestaurantIdThunk  } from "../Review/reviews-thunks";

const REVIEW_URL = "http://localhost:4000/api/reviews/restaurant/";

/*
    * This component is used to display restraunt.
 */
function ReviewList() {
    const {id} = useParams();
    const [result, setResult] = useState([]);
    let [leaveReview, setLeaveReview] = useState('');
   
    const dispatch = useDispatch();
  
    useEffect(() => {
        const asyncData = async () => {
            // This is the node API url for detail restraurant informations
            const response = await axios(REVIEW_URL + id);
            setResult(response.data);
           
        };
        // make sure we only run asyncData() once
        if(result.length === 0){
            dispatch(profileThunk());
            asyncData();
        }
    },[]);

    const { currentUser } = useSelector(state => state.users);
   
 
    const submitReview = () => {
        const templateReview = {
            "restaurantID": id,
            "userID": currentUser._id,
            "username": currentUser.username
        }
        const newReview = {
            ...templateReview,
            review: leaveReview
        }
        dispatch(createReviewThunk(newReview));
        window.location.reload();
    };
    return (
        <>
        {currentUser && currentUser.role==="USER" ? (<button> Favorite the restaurant </button>) : ""}
        {currentUser && currentUser.role==="OWNER" ? (<div><button> Add a deal </button></div>) : ""}
        {currentUser ? (<h1>Leave your review here</h1>) : (<div>login to leave your review</div>)}
        {currentUser ? <div className="col-md-6">
                <textarea value={leaveReview} 
                className="form-control mb-3" 
                id="exampleFormControlTextarea1" 
                rows="3" 
                onChange={(event) => setLeaveReview(event.target.value)}>
                </textarea>
                <button className="btn btn-primary mb-3" onClick={submitReview}>Submit</button>
            </div> : ""}
        <ul className="list-group">
       
            {
                result && result.map(result =>
                    <ReviewItem result={result}/>)
            }
        </ul>
        </>
   
    );
}
export default ReviewList;