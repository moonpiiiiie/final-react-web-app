import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { deleteDealThunk } from "../Deals/deals-thunks";
/*
    This component is used to display the details of a single restaurant.
 */

const DealItem = (
    {
        result = {
            _id: "",
            restaurantID: "{ type: String, required: true }",
            userID: "{ type: String, required: true }",
            username: "{ type: String, required: true }",
            deal: "{ type: String, required: true }",
            date: Date.now
        }

    }
) => {
    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const deleteDealHandler = (_id) => {
        dispatch(deleteDealThunk(_id));
        window.location.reload();
    }
    return(
        <>
           
         
            <div className="card col-md-6">
                    <div className="card-body">
                        <h5 className="card-title"> {result.username}</h5>
                        <p className="card-text"> {result.deal}</p>
                        {(currentUser && currentUser._id === result.userID) ? (
                        <button onClick={() => deleteDealHandler(result._id)} className="btn btn-sm btn-danger">Delete</button>) : ""}
                    </div>
                
            </div>
            
        </>
    )
}
export default DealItem;