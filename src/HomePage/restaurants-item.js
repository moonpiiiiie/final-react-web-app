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
            location:"location",
            price:"price"
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
                                    <div> <i class="bi bi-cash-coin"></i> {restaurant.price} </div>
                                    <div> <i class="bi bi-telephone"></i> {restaurant.display_phone}</div>
                                    <div> Rating: {restaurant.rating}</div>
                                    <div> <i class="bi bi-geo-alt"></i> {restaurant.location.display_address.join(", ")
}</div>
                                    <div> <i class="bi bi-chat-right-text"></i> {restaurant.comment} </div>
                                  
                                </div>
                               
                        
                            </div>
                           
                   
                </div>
                
            </div>
                
        )
    }
export default RestaurantItem;