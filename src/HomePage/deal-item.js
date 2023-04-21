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
            restaurantLocation: "{ type: String, required: true }",
            userID: "{ type: String, required: true }",
            username: "{ type: String, required: true }",
            deal: "{ type: String, required: true }",
            date: Date.now
        }
    }
) => {

    return(
        <>
               <div className="col">
                    <div className="card h-100 border-white rounded">
                
                    <div className="card-body h-100">
                        <h5 className="card-title"> <a href={'http://localhost:3000/detail/' + result.restaurantID}>{result.restaurantName}</a></h5>
                        <p className="card-text">
                        <i class="bi bi-geo-alt"></i> {result.restaurantLocation} 
                        </p>
                        <p className="card-text">
                        {result.deal}
                        </p>
                      
                    </div>
                    </div>
                    </div>
         
            {/* <div className="card col-md-6">
                    <div className="card-body">
                    <a  href={'http://localhost:3000/detail/' + result.restaurantID}>
                    <h5 className="card-title"> {result.restaurantName}</h5>
                            </a>
                            <div className="mb-2"> <i class="bi bi-geo-alt"></i> {result.restaurantLocation}</div>
                        <p className="card-text"> {result.deal}</p>
                    </div>
            </div> */}
            
        </>
    )
}
export default DealItem;