import React,{useState,useEffect} from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import '../styling/About.css';
import Logo from '../MjcLogo.png';
import MovingPics from './MovingPics';
import Value from "./Value";
import Process from "./Process";
import Team from "./Team";
import OrderExample from "./OrderExample";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import UpdatedNavBar from './UpdatedNavBar.js';

const About = ()=>{
    const [loading, setLoading]= useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        }, 250)
      }, [])
    return(
        <>
        
        { loading? <div className="loader-center"> <Loader type="BallTriangle" color="#3c72a3" height={80} width={80} /> </div> :
        <>
            <NavBar />
            <UpdatedNavBar />
                <div className="top-div-1">
                    <div className="left-about">
                        <div className="about-para-div">
                        <h2>ABOUT</h2>
                            <p style={{fontSize:"15px"}}>I've provided an answer,
                                 but FWIW, as a programmer myself,
                                  I don't know if I would call that
                                   code inert or a dummy series.
                                    It sounds useful to me. Dummy
                                     code, in my mind, is code
                                      that will never be executed.
                                       It has no purpose. 
                                       This at least serves 
                                       some function, even if the 
                                       user doesn't see i
                            </p>
                            <div className="featured-button">
                            <span className="featured-button section-button-wrapper">
                                <a class="about-featured-button section-button" href="#value">
                                    OUR VALUE
                                </a>
                            </span>
                            <span className="featured-button section-button-wrapper">
                                <a class="about-featured-button section-button" href="#process">
                                    OUR PROCESS
                                </a>
                            </span>
                            <span className="featured-button section-button-wrapper">
                                <a class="about-featured-button section-button" href="#team">
                                    OUR TEAM
                                </a>
                            </span>
                        </div>
                        </div>
                
                    </div>
                    <div className="logo-img">
                            <img className="logo" src={Logo} alt="Modesto Jello Cakes Logo"/>
                    </div>
                </div>
                <MovingPics />
                <Value />
                <Process />
                <Team />
                <Footer />
        </>
        }
        </>
    )
}
export default About;