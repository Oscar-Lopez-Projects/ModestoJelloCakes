import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import HomeDiv from "./HomeDiv";
import NavBar from "./NavBar";
import OrderExample from "./OrderExample";
import SlideShow from "./SlideShow";
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
            <WhyOnline />
            <HomeDiv />
            <SlideShow />
            <Footer />
            </div>
    
            }
        </>
    )
}
export default Home;