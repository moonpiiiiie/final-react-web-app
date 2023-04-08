import React from "react";

const DetailItem = (
    {
        result = {
            name: "No Name",
            id: "No Id",
            phone: "No Phone",
            rating: "No Rating",
            image_url: "No Image",
            price: "No Price",
        }
    }
) => {
    return(
            <li className="list-group-item">
                <div> Name: {result.name}</div>
                <div> Phone: {result.phone}</div>
                <div> Rating: {result.rating}</div>
                <div> Price: {result.price}</div>
                <img src={result.image_url} width={500} height={500}/>
            </li>
    )
}
export default DetailItem;