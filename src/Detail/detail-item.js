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
            comment:"comments....",
            location:"location",
            price:"price"
        }

    }
) => {
    return(
        <>
            
            <div className="row">
                    <div className="col-md-4">
                    
                            <img style={{borderRadius:"40px"}} class="p-3" src={result.image_url} width={300} height={300}/>
                           
                            </div>
                            <div className="col-md-8">
                                <div className="card-body mt-3">
                                <h1 className=""> {result.name}</h1>
                                    <div className="pb-2"> <i class="bi bi-cash-coin"></i> {result.price} </div>
                                    <div className="pb-2"> <i class="bi bi-telephone"></i> {result.display_phone}</div>
                                    <div className="pb-2"> Rating: {result.rating}</div>
                                   
                                </div>
                            </div>
                           
                   
                </div>
        </>
    )
}
export default DetailItem;