import React from "react";
import "../styling/MobileFooter.css";
import mainLogo from '../../src/MjcLogo.png';
<<<<<<< HEAD
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

=======
import { Link } from 'react-router-dom';
const MobileFooter = () =>{
    return(
        <>
        <div className="mobile-div-footer">
            
            <div className="top-footer-div">
                <div className="links-mobile">
                                    <Link to="/gallery"><div className="link-letter-mobile">Gallery |</div> </Link>
                                    <Link to="/order"><div className="link-letter-mobile">&nbsp; Order | </div> </Link>
                                    <Link to="/catering"><div className="link-letter-mobile"> &nbsp; Catering |</div> </Link>
                                    <Link to="/contact-us"><div className="link-letter-mobile"> &nbsp; Contact |</div> </Link>
                                    <Link><div className="link-letter-mobile">&nbsp; Donations |</div> </Link>
                                    <Link><div className="link-letter-mobile">&nbsp; Certifications</div></Link>
                                </div>
                                <div className="mobile-mainlogo">
                                    <img className="mobile-logo-footer" src={mainLogo}/>
                </div>
>>>>>>> f289f7c1e731ac8d068bb9fcae7d29b71f93c73f
            </div>
        </div>
        <div className="bottom-footer-div">
        <div className="copyrights">
            Copyright©2021 All Rights Reserved By Modesto Jello Cakes
        </div>
    </div>
    </>
    )
}
export default MobileFooter;