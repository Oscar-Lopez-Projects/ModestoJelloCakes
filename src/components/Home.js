import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import HomeDiv from "./HomeDiv";
import NavBar from "./NavBar";
import OrderExample from "./OrderExample";
import Process from "./Process";
import SlideShow from "./SlideShow";
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
            <SlideShow />
            <HomeDiv />
            <Footer />
            </div>
    
            }
        </>
    )
}
export default Home;