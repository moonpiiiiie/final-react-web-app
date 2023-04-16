import React from "react";


/*
    This component is used to display the details of a single restaurant.
 */

const DealItem = (
    {
        result = {
            _id: "",
            restaurantID: "{ type: String, required: true }",
            restaurantName: "{ type: String, required: true }",
            userID: "{ type: String, required: true }",
            username: "{ type: String, required: true }",
            deal: "{ type: String, required: true }",
            date: Date.now
        }

    }
) => {

    return(
        <>
           
         
            <div className="card col-md-6">
                    <div className="card-body">
                    <a  href={'http://localhost:3000/detail/' + result.restaurantID}>
                    <h5 className="card-title"> {result.restaurantName}</h5>
                            </a>
                        
                        <p className="card-text"> {result.deal}</p>
                    </div>
            </div>
            
        </>
    )
}
export default DealItem;