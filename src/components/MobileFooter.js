import React from "react";
import "../styling/MobileFooter.css";
import mainLogo from '../../src/MjcLogo.png';
import instaLogo from '../../src/instagram.png';
import facebookLogo from '../../src/facebook.png';
import phoneLogo from '../../src/text.png';
import { Link } from 'react-router-dom';
const MobileFooter = () =>{
    return(
        <div className="footer-container">
            <div className="top-footer-mobile">
                <div className="img-mainlogo-mobile">
                    <img className="main-logo-footer-mobile" src={mainLogo}/>
                </div>
                <div className="mission-mobile">
                    <h2>Our Mission:</h2>
                                <p style={{textAlign:"left"}}>
                                I've provided an answer, but FWIW, as a programmer myself,
                                I don't know if I would call that code inert or a dummy
                                series. It sounds useful to me. Dummy code, in my mind 
                                </p>
                </div>

            </div>
            <div className="bottom-footer-mobile">

            </div>
        </div>
    )
}
export default MobileFooter;