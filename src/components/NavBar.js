import React from 'react';
import mainLogo from '../../src/MjcLogo.png';
import styled from 'styled-components';
import LoginLogo from '../../src/log.png';
import '../styling/NavBar.css';

const NavLinks = styled.p`
    font-size:15px;
    font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
`;

const NavBar = ()=>{
    return(
        <div className="nav-bar">
            <div>
                 <img height="65px" src={mainLogo} alt="main-logo" />
            </div>
            <div className="navlinks">
                <NavLinks>Gallery</NavLinks>
            </div>
        
            <div className="navlinks">
                <NavLinks>Menu</NavLinks>
            </div>
            <div className="navlinks">
               <NavLinks>About Us</NavLinks>
            </div>
            <div className="navlinks">
               <NavLinks>Contact Us</NavLinks>
            </div>
            <div className="navlinks">
               <NavLinks>Catering</NavLinks>
            </div>

            <div>
               <img height="65px" src={LoginLogo}/>
            </div>
        </div>
    )
}
export default NavBar