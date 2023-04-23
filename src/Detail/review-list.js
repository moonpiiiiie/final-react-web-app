import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewItem from "./review-item";
import {useParams, Link } from 'react-router-dom';
import {findUserById} from "../Users/users-service";
import {profileThunk} from "../Users/users-thunks";
import { createReviewThunk } from "../Reviews/reviews-thunks";
import "../HomePage/index.css";

const REVIEW_URL = "http://localhost:4000/api/reviews/restaurant/";
const DETAIL_URL = "http://localhost:4000/api/detail/";
/*
    * This component is used to display restraunt.
 */
function ReviewList() {
    const { currentUser } = useSelector(state => state.users);

    const [profile, setProfile] = useState({});
    const {id} = useParams();
    const [result, setResult] = useState([]);
    let [leaveReview, setLeaveReview] = useState('');
    
    const dispatch = useDispatch();
    const [restaurant, setRestaurant] = useState([]);
   
    useEffect(() => {
        const asyncData = async () => {
            // This is the node API url for detail restraurant informations
            const response = await axios(DETAIL_URL + id);
            setRestaurant(response.data);
          
        };
        // make sure we only run asyncData() once
        // if(Object.keys(restaurant).length === 0){
        //     dispatch(profileThunk());
            asyncData();
        // }
    },[id]);
 
    useEffect(() => {
        const asyncData = async () => {
            // This is the node API url for detail restraurant informations
            const response = await axios(REVIEW_URL + id);
            setResult(response.data);
           
        };
        // make sure we only run asyncData() once
        // if(Object.keys(result).length === 0){
            // dispatch(profileThunk());
            asyncData();
        // }
    },[id]);

      const fetchProfile = async () => {
        const user = await findUserById(currentUser._id);
        await setProfile(user);
    };
    useEffect(() => {
        fetchProfile();
    }, [currentUser]);
 
    const submitReview = () => {
        const templateReview = {
            "restaurantID": id,
            "restaurantName": restaurant.name,
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
       
        {profile && profile.role==="USER" && profile.canReview ? 
        <div className="col-md-6 m-3">
                <h1>Leave Your Reviews</h1>  
                <textarea value={leaveReview} 
                className="form-control mb-3" style={{backgroundColor:"#fafafa"}}
                placeholder="Leave your reviews here"
                
                rows="3" 
                onChange={(event) => setLeaveReview(event.target.value)}
                >
                </textarea>
                <button className="btn mb-3 rounded-pill " onClick={submitReview}>Submit</button>
            </div> : ""}
         <div className="m-3">
            <h1>Reviews</h1>  
            {!currentUser ? <Link to="http://localhost:3000/login">Log in to leave your reviews</Link> : ""}
           <div className="container">
              <div className="row">
              {
           result && result.map(result =>
               <ReviewItem result={result}/>)
       }
                </div>
           </div>
    
   </div>
      
        </>
   
    );
}
export default ReviewList;