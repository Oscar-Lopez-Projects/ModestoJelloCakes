import React, { useEffect, useState } from "react";
import MobileFooter from './MobileFooter.js';
import HomeDiv from "./HomeDiv";
import Footer from "./Footer.js";
import NavBar from "./NavBar";
import OrderExample from "./OrderExample";
import SlideShow from "./SlideShow";
import WhyOnline from "./WhyOnline";
import UpdatedNavBar from "./UpdatedNavBar.js";
import Benefits from './Benefits.js';
import ThreeDCaro from "./ThreeDCaro.js";

const Home = () =>{
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      }, 3800)
    }, [])
    return(
        <>
            { loading ? <OrderExample /> :
            <div>
            <NavBar />
            
            <WhyOnline />
            <Benefits />
            {/* <UpdatedNav /> */}
            <UpdatedNavBar />
            <HomeDiv />
            {/* <Footer /> */}
            {/* <MobileFooter /> */}
            {/* <Footer /> */}
            </div>
    
            }
        </>
    )
}
export default Home;