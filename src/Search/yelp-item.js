import React from "react";

const YelpItem = (
    {
        result = {
            name: "No Name",
            id: "No Id",
            phone: "No Phone",
            rating: "No Rating",
            image_url: "No Image",
        }
    }
) => {
        return(
                <li className="list-group-item">
                    <a href={'http://localhost:3000/detail/' + result.id}>
                        <div> Name: {result.name}</div>
                        <div> Phone: {result.phone}</div>
                        <div> Rating: {result.rating}</div>
                        <img src={result.image_url} height={300} width={300}/>
                    </a>
                </li>
        )
    }
export default YelpItem;