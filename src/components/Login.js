import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import '../styling/Login.css'

const Login = () =>{
    return(
        <>
            <NavBar />
            <div className="main-login-box">
                <div className="box-of-login">
                    <div className="title">
                        <h1>Login</h1>
                    </div>
                    <div className="username">
                        <form>
                            <input className="div-input" type="text" value="Username or Email"  />
                        </form>
                    </div>
                    <div className="password">
                            <input className="div-input" value="Password"/>
                    </div>
                    <div className="sign-in">
                            <button className="div-input">sign in</button>
                    </div>
                    <div className="forgot-pw">
                        forgot password?
                    </div>
                    <hr data-conent="Or" />
                    <div className="google-login">
                    <button className="div-input">GOOGLE </button>
                    </div>
                    <div className="create-account">
                        <button className="div-input">Create Account </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;