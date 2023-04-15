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
    const {reviews} = useSelector(state => state.reviews);
    
    let [leaveReview, setLeaveReview] = useState('');
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewByRestaurantIdThunk(id));
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
            review: leaveReview,
            date: Date.now()
        }
        dispatch(createReviewThunk(newReview));
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
                reviews && reviews.map(Review =>
                    <ReviewItem result={Review}/>)
            }
        </ul>
        </>
   
    );
}
export default ReviewList;