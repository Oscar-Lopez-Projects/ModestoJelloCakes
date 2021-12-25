import React from "react";
import mainLogo from '../../src/MjcLogo.png';
import '../styling/Footer.css';
import instaLogo from '../../src/instagram.png';
import facebookLogo from '../../src/facebook.png';
import phoneLogo from '../../src/text.png';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <div>
        <div className="footer-div">
            <div className="main-footer">
                <div className="mission-title">
                    <h2 style={{textAlign:"left"}} >Our Mission:</h2>
                    <p style={{textAlign:"left"}}>
                    I've provided an answer, but FWIW, as a programmer myself,
                     I don't know if I would call that code inert or a dummy
                      series. It sounds useful to me. Dummy code, in my mind,, is code that will never be executed. It has no purpose. This at least serves some function, even if the user doesn't see it.
                    </p>
                </div>
                <div className="logo">
                    <img className="mjc-main-logo" src={mainLogo} alt="Our Logo"/>
                </div>
                <div className="quick-links">
                    <h2 className="quick-link-title">Quick Links</h2>
                    <div className="links">
                        <Link to="/gallery"><div className="link-letter">Gallery</div> </Link>
                        <Link to="/order"><div className="link-letter">Order</div> </Link>
                        <Link to="/catering"><div className="link-letter">Catering</div> </Link>
                        <Link to="/contact-us"><div className="link-letter">Contact</div> </Link>
                        <Link><div className="link-letter">Donations</div> </Link>
                        <Link><div className="link-letter">Certifications</div></Link>
                    </div>
                </div>
            </div>

            <div className="line"></div>

            <div className="bottom-footer">
                <div className="copyright">
                Copyright©2021 All Rights Reserved By Modesto Jello Cakes
                </div>
                <div className="social">
                    <div style={{textAlign:"right"}}>
                        <a href="https://www.facebook.com/ModestoJelloCake/">
                            <img className="img-logo-size" src={facebookLogo} alt="https://www.facebook.com/ModestoJelloCake/" />
                        </a>
                        <a href="https://www.instagram.com/modesto.jello.cakes/">
                            <img className="img-logo-size" src={instaLogo} alt="Instagram Icon"/>
                        </a>
                        {/*Need to set up for when clicked, give the option of spanish or english. functionality needed */}
                        <a href="tel:2094121586">
                            <img className="img-logo-size" src={phoneLogo} alt="Phone Icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Footer;