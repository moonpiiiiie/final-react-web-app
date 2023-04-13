import React from "react";

/*
    This component is used to display a yelp restraunt home page.
 */
const RestaurantItem = (
    {
        restaurant = {
            name: "No Name",
            id: "No Id",
            phone: "No Phone",
            rating: "No Rating",
            image_url: "No Image",
            comment:"comments....",
            location:"location"
        }
    }
) => {
        return(
            <div className="card mb-3">
                <div className="row">
                    <div className="col-md-4">
                        <a  href={'http://localhost:3000/detail/' + restaurant.id}>
                            <img className="p-3" src={restaurant.image_url} width={300} height={300}/>
                            </a>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <a  href={'http://localhost:3000/detail/' + restaurant.id}>
                                    <h5 className="card-title"> {restaurant.name}</h5>
                                    </a>
                                    <div> Phone: {restaurant.phone}</div>
                                    <div> Rating: {restaurant.rating}</div>
                                    <div> Location: {restaurant.location.display_address.join(", ")
}</div>
                                    <div> Comment: {restaurant.comment} </div>
                                </div>
                               
                        
                            </div>
                           
                   
                </div>
                
            </div>
                
        )
    }
export default RestaurantItem;