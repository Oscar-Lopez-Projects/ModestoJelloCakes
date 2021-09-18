import React from "react";
import mainLogo from '../../src/MjcLogo.png';
import '../styling/Footer.css';
import instaLogo from '../../src/instagram.png';
import facebookLogo from '../../src/facebook.png';
import phoneLogo from '../../src/text.png';


const Footer = () =>{
    return(
        <div className="footer-div">
            {/* <h1>Testing the footer</h1> */}
            <div className="main-footer">
                <div className="mission-title">
                    <h1 style={{textAlign:"left"}} >Our Mission:</h1>
                    <p style={{textAlign:"left"}}>
                    I've provided an answer, but FWIW, as a programmer myself,
                     I don't know if I would call that code inert or a dummy
                      series. It sounds useful to me. Dummy code, in my mind,
                       is code that will never be executed. It has no purpose.
                     This at least serves some function, even if the user doesn't see it.
                    </p>
                </div>
                <div className="logo">
                    <img src={mainLogo} alt="Our Logo"/>
                </div>
                <div className="quick-links">
                    <h1 style={{width:"50%"}}>Quick Links</h1>
                    <div className="links">
                        <div>Gallery</div>
                        <div>Order</div>
                        <div>Catering</div>
                        <div>Contact</div>
                        <div>Donations</div>
                        <div>Certifications</div>
                    </div>
                </div>
            </div>

            <div className="line"></div>

            <div className="bottom-footer">
                <div className="copyright">
                Copyright©2021 All Rights Reserved By Modesto Jello Cakes
                </div>
                <div className="social">
                    <div>

                        <img className="img-logo-size" src={instaLogo} alt="Instagram Icon"/>
                    </div>
                    <div>
                        <img className="img-logo-size" src={facebookLogo} alt="Facebook Icon" />
                    </div>
                    <div>
                        <img className="img-logo-size" src={phoneLogo} alt="Phone Icon" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Footer;