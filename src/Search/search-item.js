import React from "react";

/*
    This component is used to display a single yelp restraunt search result.
 */
const SearchItem = (
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
                <div className="col mt-2">
                    <a  href={'http://localhost:3000/detail/' + result.id}>
                        <img className="" src={result.image_url} width={300} height={300}/>
                        <h5 className=""> Name: {result.name}</h5>
                        <div> Phone: {result.phone}</div>
                        <div> Rating: {result.rating}</div>
                    </a>
                </div>
        )
    }
export default SearchItem;