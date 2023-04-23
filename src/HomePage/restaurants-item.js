
import React, {useEffect, useState} from "react";
import '../index.css';
import './index.css';
// import {useParams} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {profileThunk} from "../Users/users-thunks";
// import axios from "axios";
// const REVIEW_URL = "http://localhost:4000/api/reviews/restaurant/";
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
//     const [comment, setComment] = useState([]);
   
//    restaurant.comment = comment[0];
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//         const asyncData = async () => {
//             // This is the node API url for detail restraurant informations
//             const response = await axios(REVIEW_URL + restaurant.id);
//             setComment(response.data);
//             console.log(response.data);
//             debugger;
//         };
//         // make sure we only run asyncData() once
//         if(comment.length === 0){
//             dispatch(profileThunk());
//             asyncData();
//         }
//     },[]);

        return(
          
                    <div className="col">
                    <div className="card rounded border-white h-100">
                    <a  href={'http://localhost:3000/detail/' + restaurant.id}>
                    <img src={restaurant.image_url} class="card-img-top rounded"
                        alt="Hollywood Sign on The Hill" />
                        </a>
                    <div className="card-body h-100">
                        <h5 className="card-title"> <a href={'http://localhost:3000/detail/' + restaurant.id}>{restaurant.name}</a></h5>
                        <p className="card-text text-secondary">
                        <i className="bi bi-cash-coin pe-2"></i> {restaurant.price} 
                        </p>
                        <p className="card-text text-secondary">{restaurant.display_phone && (<i className="bi bi-telephone pe-2"> {restaurant.display_phone}</i> )}
                        
                        </p>
                        <p className="card-text text-secondary">
                        {restaurant.rating>=4? (<i class="bi bi-hand-thumbs-up-fill pe-2"></i>): ""}Rating: {restaurant.rating} <span></span>
                                   
                        </p>
                        <p className="card-text text-secondary">
                        <i className="bi bi-geo-alt pe-2"></i> {restaurant.location.display_address.join(", ")}
                        </p>
                    </div>
                    </div>
                    </div>
                    
              
                
                
          
                
        )
    }
export default RestaurantItem;