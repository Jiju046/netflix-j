import React, { useRef } from "react";
import "./signupscreen.css"
import {auth} from "../firebase"

function SignupScreen(){


    const emailRef=useRef(null);
    const passRef=useRef(null);

    const signIn= (e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        )
        .then((response)=>{   //response
           console.log(response) 
        }
        )       
        .catch((error)=>{
        alert(error.message)
    })
        
    };

    const signUp=(e)=> {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return(
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email Address" type='email' ref={emailRef}></input>
                <input placeholder="Password" type='password' ref={passRef}></input>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4><span className="signupscreen__grey">New to Netflix! </span>
                <span className="signupscreen__link" onClick={signUp}>Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen;