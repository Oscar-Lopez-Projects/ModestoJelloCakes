import React from "react";
import mainLogo from '../../src/MjcLogo.png';
import '../styling/OrderExample.css'
const OrderExample = ()=>{
    return(
        <body>
            <div class="loader">
                <div class="circle">
                    <span class="quarter"></span>
                    <span class="quarter"></span>
                    <span class="quarter"></span>
                    <span class="quarter"></span>
                    
                        <img className="text" src={mainLogo} alt="our logo" />
                    </div>
            </div>
        </body>
    )
}
export default OrderExample;