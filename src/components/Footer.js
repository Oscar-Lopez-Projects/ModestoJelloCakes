import React from "react";
import mainLogo from '../../src/MjcLogo.png';
import '../styling/Footer.css';
import instaLogo from '../../src/instagram.png';
import facebookLogo from '../../src/facebook.png';
import phoneLogo from '../../src/text.png';
import { Link } from 'react-router-dom';
import {FiFacebook, FiInstagram} from 'react-icons/fi';
import {FaWhatsapp} from 'react-icons/fa'


const Footer = () =>{
    return(
        <div>
        <div className="footer-div">
            <div className="main-footer">
                <div className="mission-title">
                    <div className="gat">
                        <h2 style={{textAlign:"left",fontWeight: "bold", fontSize:"15px"}} >Our Mission:</h2>
                        <p style={{textAlign:"left", width:"50%", fontSize:"12px"}}>
                        I've provided an answer, but FWIW, as a programmer myself,
                        I don't know if I would call that code inert or a dummy
                        series. It sounds useful to me. Dummy code, in my mind </p>
                        <div className="social">
                            <a href="https://www.facebook.com/ModestoJelloCake/" style={{textAlign:"left" }}>
           
                                <img className="img-logo-size" src={facebookLogo} alt="https://www.facebook.com/ModestoJelloCake/" />
                            </a>
                            <a href="https://www.instagram.com/modesto.jello.cakes/">
                                <img className="img-logo-size" src={instaLogo} alt="Instagram Icon"/>
                                
                            </a>
                            {/* Need to set up for when clicked, give the option of spanish or english. functionality needed */}
                            <a href="tel:2094121586">
                                
                                <img className="img-logo-size" src={phoneLogo} alt="Phone Icon" />
                            </a>
                </div>
                    </div>
                    {/* make a div to carry two links per row */}
                            <div className="quick-links">
                                <div className="img-mainlogo">
                                    <img className="main-logo-footer" src={mainLogo}/>
                                </div>
                              
                        </div>
                </div>
    

                
                
            </div>

            <div className="line"></div>

            <div className="bottom-footer">
                <div className="copyright">
                Copyright©2021 All Rights Reserved By Modesto Jello Cakes
                </div>
                <div className="links">
                                    <div className="quick-link-title">Quick Links:</div>
                                    <Link to="/gallery"><div className="link-letter">Gallery</div> </Link>
                                    <Link to="/order"><div className="link-letter">Order</div> </Link>
                                    <Link to="/catering"><div className="link-letter">Catering</div> </Link>
                                    <Link to="/contact-us"><div className="link-letter">Contact</div> </Link>
                                    <Link><div className="link-letter">Donations</div> </Link>
                                    <Link><div className="link-letter">Certifications</div></Link>
                                </div>
                
            
             
            </div>
        </div>
        </div>
    )
}
export default Footer;