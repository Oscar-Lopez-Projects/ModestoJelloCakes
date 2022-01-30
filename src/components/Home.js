import React, { useEffect, useState } from "react";
import MobileFooter from './MobileFooter.js';
import HomeDiv from "./HomeDiv";
import Footer from "./Footer.js";
import NavBar from "./NavBar";
import OrderExample from "./OrderExample";
import SlideShow from "./SlideShow";
import UpdatedNav from "./UpdatedNav.js";
import WhyOnline from "./WhyOnline";
import UpdatedNavBar from "./UpdatedNavBar.js";
const Home = () =>{
    const [loading, setLoading]= useState(false);

    // useEffect(()=>{
    //   setLoading(true)
    //   setTimeout(()=>{
    //     setLoading(false)
    //   }, 3800)
    // }, [])
    return(
        <>
            { loading ? <OrderExample /> :
            <div>
            {/* <NavBar /> */}
            <UpdatedNav />
            <WhyOnline />
            {/* <UpdatedNav /> */}
            {/* <UpdatedNavBar /> */}
            <HomeDiv />
            <SlideShow />
            <Footer />
            {/* <MobileFooter /> */}
            {/* <Footer /> */}
            </div>
    
            }
        </>
    )
}
export default Home;