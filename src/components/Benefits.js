import React from "react";
import birthday from "../birthday.png";
import tracking from "../tracking.png";
import choices from "../choices.png";
import reward from "../reward.png";
const Benefits = ()=>{
    return(
        <>
        <h3 style={{textAlign:"left", Top:"20px", margin:"0 auto", width:"80vw", color:"#3c72a3",fontWeight:"bold"}}>Program Benefits</h3>
        <div className="benefits-page">

            <div className="icon-info-div">
                <div className="icon-divs">
                <img className="benefits-icons" src={reward} />
                <p style={{marginTop:"20px", fontWeight:"bold"}}>Earn 5% back for EVERY purchase you make!!</p>
                </div>
                
                

            </div>
            <div className="icon-info-div">
                <div className="icon-divs">
                <img className="benefits-icons" src={tracking} />
                <p style={{marginTop:"20px", fontWeight:"bold"}}>Track all of your purchases</p>
                </div>
                
                
            </div>
            <div className="icon-info-div">
                <div className="icon-divs">
                <img className="benefits-icons" src={choices}/>
                <p style={{marginTop:"20px", fontWeight:"bold"}}>Manage your orders & order history</p>
                </div>
                
                
            </div>
            <div className="icon-info-div">
                <div className="icon-divs">
                <img className="benefits-icons" src={birthday} />
                <p style={{marginTop:"20px", fontWeight:"bold"}}>New! A birthday treat. $3 dollars of your order</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Benefits;