import React from "react";
import "../styling/MobileFooter.css";
import mainLogo from '../../src/MjcLogo.png';
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