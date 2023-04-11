import React from "react";

/*
    This component is used to display the details of a single restaurant.
 */
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
        <>
            <h1> {result.name}</h1>
                <div className="row">
                    <div className='col-5'>
                        <img className="" src={result.image_url} width={300} height={300}/>
                    </div>
                    <div className='col-5'>
                        <div> Phone: {result.phone}</div>
                        <div> Rating: {result.rating}</div>
                        <div> Price: {result.price}</div>
                    </div>
                </div>
        </>
    )
}
export default DetailItem;