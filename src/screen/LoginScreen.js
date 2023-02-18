import React from "react"
import "./LoginScreen.css"
import { useState } from "react"
import SignupScreen from "./signupscreen"

function Loginscreen(){

    const [signin,setSignin]=useState(false);

    return (

        

        <div className="loginScreen">
            <div className="loginScreen__background">
            <img
            className="loginScreen__logo"
            alt="logo" src="https://cdn-images-1.medium.com/max/1200/1*ty4NvNrGg4ReETxqU2N3Og.png" />
            </div>
            <button className="loginScreen__button" onClick={()=>setSignin(true)}>Sign In</button>

            <div className="loginScreen__gradient"></div>
            
            
            <div className="loginScreen__content">
             {signin?
            <SignupScreen />:
            (<div>
            <h1>Unlimited access to awesome Movies,TV shows and much more..</h1>
            <h2>Watch anywhere,cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            
            
            <div className="loginScreen__input">
            <form>
            <input placeholder="Email Address" type="email" />
            <button className="loginScreen__getstarted" onClick={()=>setSignin(true)}>GET STARTED</button>
            </form>
            </div>
        </div>)}
        </div>
        
            
            
        </div>
    )
}

export default Loginscreen