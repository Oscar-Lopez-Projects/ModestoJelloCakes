import React from 'react';
import mainLogo from '../../src/MjcLogo.png';
import styled from 'styled-components';
import LoginLogo from '../../src/log.png';
import '../styling/NavBar.css';
import { Link } from 'react-router-dom';
const NavLinks = styled.p`
    font-size:15px;
    font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
`;

const NavBar = ()=>{
    return(
        <div className="nav-bar">
            <div>
                <Link to="/">
                 <img height="65px" src={mainLogo} alt="main-logo" />
                 </Link>
            </div>
            <div className="navlinks">
                <NavLinks> 
                    <Link to="/gallery">Gallery </Link>
                </NavLinks>
            </div>
        
            <div className="navlinks">
                <NavLinks>
                    <Link to="/order">Place An Order</Link>
                </NavLinks>
            </div>
            <div className="navlinks">
               <NavLinks>
                   <Link to="catering">Catering Options</Link>
                </NavLinks>
            </div>
            <div className="navlinks">
               <NavLinks>
                   <Link to="/contact-us">Contact Us </Link>
                </NavLinks>
            </div>
            <div className="navlinks">
               <NavLinks>
                   <Link to="/about-us">About Us</Link>
                </NavLinks>
            </div>

            <div>
                <Link to="/login">
                    <img height="65px" src={LoginLogo} alt="business-logo"/>
               </Link>
            </div>
        </div>
    )
}
export default NavBar