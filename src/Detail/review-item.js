import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { deleteReviewThunk } from "../Reviews/reviews-thunks";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

/*
    This component is used to display the details of a single restaurant.
 */

const ReviewItem = (
    {
        result = {
            _id: "",
            restaurantID: "{ type: String, required: true }",
            restaurantName: "{ type: String, required: true }",
            userID: "{ type: String, required: true }",
            username: "{ type: String, required: true }",
            review: "{ type: String, required: true }",
            date: Date,
        }

    }
) => {
    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const deleteReviewHandler = (_id) => {
        dispatch(deleteReviewThunk(_id));
        window.location.reload();
    }
    return(
        <>
         <div class="col-md-8">
        <div class="media g-mb-30 media-comment">
       
            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">

              <div class="g-mb-15">
              <a href={'http://localhost:3000/profile/' + result.userID}>
               <Avatar id="avatar" sx={{ bgcolor: deepPurple[500],  width: 60, height: 60 }}>{result.username.charAt(0)}</Avatar>
                </a>
                {currentUser && currentUser._id === result.userID ? ( <a href='http://localhost:3000/profile/'>
                <h5 class="g-color-gray-dark-v1 mb-0">{result.username}</h5>
                </a>) : <a href={'http://localhost:3000/profile/' + result.userID}>
                <h5 class="g-color-gray-dark-v1 mb-0">{result.username}</h5>
                </a>}
                
                
                <span class="g-color-gray-dark-v4 g-font-size-12">{result.date.toString().substring(0,10)}</span>
              </div>
        
              <p>{result.review}</p>
              {(currentUser && currentUser._id === result.userID) ? (
              <button onClick={() => deleteReviewHandler(result._id)} className="btn btn-sm rounded-pill mb-3">Delete</button>) : ""}
           
            </div>
        </div>
    </div>
    </>
    

            
      
    )
}
export default ReviewItem;