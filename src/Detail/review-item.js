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
                <div className="row no-gutters">
                    <div className="col-md-2">
                    <div className="card-body">
                        <Avatar sx={{ bgcolor: deepPurple[500],  width: 60, height: 60 }}>{result.username.charAt(0)}</Avatar>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title"> {result.username}</h5>
                        <p className="card-text"> {result.review}</p>       
                        </div>
                    </div>
                    <div className="col-md-2">
                    <div className="card-body">
                        {(currentUser && currentUser._id === result.userID) ? (
                        <button onClick={() => deleteReviewHandler(result._id)} className="btn btn-sm btn-danger rounded-pill float-end">Delete</button>) : ""}
                   </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default ReviewItem;