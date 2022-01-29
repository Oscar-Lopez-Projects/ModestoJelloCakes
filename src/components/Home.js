import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import HomeDiv from "./HomeDiv";
import MobileFooter from "./MobileFooter";
import NavBar from "./NavBar";
import OrderExample from "./OrderExample";
import SlideShow from "./SlideShow";
import UpdatedNavBar from "./UpdatedNavBar";
import WhyOnline from "./WhyOnline";
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
            <NavBar />
            <UpdatedNavBar />
            <WhyOnline />
            
            <HomeDiv />
            <SlideShow />
<<<<<<< HEAD
            {/* <Footer /> */}
=======
>>>>>>> 72595ddc3ebea7e4f04a2b1a04674393b072a202
            <MobileFooter />
            {/* <Footer /> */}
            </div>
    
            }
        </>
    )
}
export default Home;