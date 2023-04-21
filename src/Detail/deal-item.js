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
         
         <div class="col-md-8">
        <div class="media g-mb-30 media-comment">
       
            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">

              <div class="g-mb-15">
              
                
                <h5 class="g-color-gray-dark-v1 mb-0">{result.username}</h5>
                <span class="g-color-gray-dark-v4 g-font-size-12">{result.date.toString().substring(0,10)}</span>
              </div>
        
              <p>{result.deal}</p>
              {(currentUser && currentUser._id === result.userID) ? (
                        <button onClick={() => deleteDealHandler(result._id)} className="btn btn-sm rounded-pill">Delete</button>) : ""}
           
            </div>
        </div>
    </div>
      
            
        </>
    )
}
export default DealItem;