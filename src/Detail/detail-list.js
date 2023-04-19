import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import DetailItem from "./detail-item";
import { useParams } from 'react-router-dom';
import { favoriteRestaurant, findFavoriteRestaurantsByUserId, unfavoriteRestaurant } from "../Users/favoriteRestaurant-service";


const DETAIL_URL = "http://localhost:4000/api/detail/";


function DetailList() {
    const { id } = useParams();
    const { currentUser } = useSelector(state => state.users);
    const [restDetail, setRestDetail] = useState({});
    const [favRestaurants, setFavRestaurants] = useState([]);
    const [liked, setLiked] = useState(false);
   
    useEffect(() => {
        const asyncData = async () => {
            // This is the node API url for detail restraurant informations
            const response = await axios(DETAIL_URL + id);
            setRestDetail(response.data);
        };
        // make sure we only run asyncData() once
        if (Object.keys(restDetail).length === 0) {
            asyncData();   
        }
    }, [id]);

    useEffect(() => {
        const loadScreen = async (id) => {     
            findFavoriteRestaurantsByUserId(currentUser._id).then((data) =>{
                setFavRestaurants(data);
            });
        };
        if (currentUser) {
            loadScreen(id);
        }
    }, [currentUser, id]);

    useEffect(() => {
        favRestaurants.forEach((item) => {
            if (item.restaurantId === id) {
                setLiked(true);
            }
        });
    }, [favRestaurants, id])

    const favRestaurantOnClick = async () => {
        const response = await favoriteRestaurant(currentUser._id, id, restDetail.name);
        setLiked(true);
    };

    const unFavRestaurantOnClick = async () => {
        const response = await unfavoriteRestaurant(currentUser._id, id);
        setLiked(false);
     };


    const renderFav = useMemo( () => {
        if (currentUser && currentUser.role === "USER") {
            if (liked) {
                return (<div className="ms-3"> <i class="bi bi-star-fill" onClick={unFavRestaurantOnClick}> <span >Liked the restaurant</span></i></div>)
            } else {
                return (<div className="ms-3"> <i class="bi bi-star" onClick={favRestaurantOnClick}> Like the restaurant</i></div>)
            }
        }
    }, [currentUser, liked])
    return (
        <>
            <ul className="list-group">
                {
                    restDetail && <DetailItem result={restDetail} />
                }
            </ul>
            <div>

                {renderFav}
       
            </div>
        </>

    );
}
export default DetailList;