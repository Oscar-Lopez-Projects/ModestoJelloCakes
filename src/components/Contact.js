import React, { useEffect, useState} from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import '../styling/Contact.css';
import ExamplePic from '../MyPost.png';
import UpdatedNavBar from "./UpdatedNavBar";

const Contact = ()=>{
    const [loading, setLoading]= useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        }, 10)
      }, [])
    return(
        <div>
            { loading? <div> </div> : 
            <div>
            <NavBar />
            <UpdatedNavBar />
            <div className="contact-outer-div">
                <div className="top-div">
                    <div className="contact-title">
                        <div style={{fontSize:"30px"}}>Contact Us</div>
                    </div>
                    <div className="description">
                        <p> I've provided an answer, but FWIW, as a programmer myself,
                             I don't know if I would call that code inert or a dummy series.
                              It sounds useful to me. Dummy code, in my mind, is code that
                               will never be executed. It has no purpose. This at least
                                serves some function, even if the user doesn't see it.
                        </p>
                    </div>
                </div>
                <div className="bottom-div">
                    <div className="div-1-image">
                        <img className="image-size" src={ExamplePic} alt="example pic"/>
                    </div>
                    <div className="form-div">
                        <form className="form-div">
                                <input className="div-input" type="text" name="name" value="Name" />
                                <input className="div-input" type="email" name="email" value="Email" />
                                <input className="div-input" type="" name="phone" value="Phone"/>
                                <textarea className="div-message" value="Message"/>
                                <input className="div-input" type="submit" value="Send Message"/>
                        </form>
                    </div>
                </div>
            </div> 
            <Footer />
            </div>
}
        </div>
    )
}
export default Contact;