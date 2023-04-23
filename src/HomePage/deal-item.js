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
                    <div className="card h-100 border-white rounded l-card" style={{backgroundColor: '#f5f5f5'}}>
                
                    <div className="card-body h-100">
                        <section className="l-card_text">
                        <p className="card-text" style={{fontFamily:""}}>
                        {result.deal}
                        </p>
                        </section>
                    <section className="l-card_user">
                    <div class="l-card__userImage mt-2">
			            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJVp7Tm5SqzYSQCI4c12l07pzdQe5rHd1hA&usqp=CAU" alt="Naruto"  />
		            </div>
                    <div className="l-card__userInfo mt-3">
                    <span className="card-title"> <a href={'http://localhost:3000/detail/' + result.restaurantID}>{result.restaurantName}</a></span>
                    <span className="card-text text-secondary">
                    <i class="bi bi-geo-alt"></i> {result.restaurantLocation} 
                    </span>
                    </div>
                   
                    </section>
                       
                       
                      
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