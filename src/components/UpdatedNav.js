import React from "react";
import "../styling/UpdatedNav.css";
import { Link } from 'react-router-dom';
import mainLogo from '../../src/MjcLogo.png';
import {MdAccountCircle} from "react-icons/md";
import {IoBagAdd} from "react-icons/io5";
const UpdatedNavBar = () =>{
    return(
        <div className="new-nav-container">
            hi
            <div className="div-logo-nav">
                    <img className="nav-logo-div-image"  src={mainLogo}/>
                </div>
            <div className="links-nav">
            <div className="navlinks">
                    <Link className="link" to="/gallery">Gallery </Link>
            </div>
        
            <div className="navlinks">
                
                    <Link className="link" to="/order">Place An Order</Link>
                
            </div>
           
            <div className="navlinks">
               
                   <Link className="link" to="/contact-us">Contact Us </Link>
                
            </div>
            <div className="navlinks">
              
                   <Link className="link" to="/about-us">About Us</Link>
               
            </div>

            </div>
            <div className="nav-icons">
                <MdAccountCircle />
                <IoBagAdd />
            </div>
        </div>
    )
}
export default UpdatedNavBar;