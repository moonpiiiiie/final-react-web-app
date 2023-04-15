import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { deleteReviewThunk } from "../Review/reviews-thunks";
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
            date: Date.now
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
           
         
            <div className="card col-md-6">
                    <div className="card-body">
                        <h5 className="card-title"> {result.username}</h5>
                        <p className="card-text"> {result.review}</p>
                        {(currentUser && currentUser._id === result.userID) ? (
                        <button onClick={() => deleteReviewHandler(result._id)} className="btn btn-sm btn-danger">Delete</button>) : ""}
                    </div>
                
            </div>
            
        </>
    )
}
export default ReviewItem;