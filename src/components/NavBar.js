import React from 'react';
import mainLogo from '../../src/MjcLogo.png';
// import mainLogo from '../data/mjcwhite.png';
import styled from 'styled-components';
// import LoginLogo from '../../src/log.png';
import LoginLogo from '../whitelogin3.png';
import '../styling/NavBar.css';
import { Link } from 'react-router-dom';
import {RouterLink} from './Styling';
import ScrollToTop from './ScrollToTop';
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
                    <Link className="link" to="/gallery">Gallery </Link>
                </NavLinks>
            </div>
        
            <div className="navlinks">
                <NavLinks>
                    <Link className="link" to="/order">Place An Order</Link>
                </NavLinks>
            </div>
           
            <div className="navlinks">
               <NavLinks>
                   <Link className="link" to="/contact-us">Contact Us </Link>
                </NavLinks>
            </div>
            <div className="navlinks">
               <NavLinks >
                   <Link className="link" to="/about-us">About Us</Link>
                </NavLinks>
            </div>

            <div>
                <RouterLink style={{textDecoration:"none", color:"white"}} to="/login">
                    <img width="60px" src={LoginLogo} alt="business-logo"/>
                    My Account
               </RouterLink>
            </div>
           
        </div>
    )
}
export default NavBar