import React, { useEffect,useState,} from "react";
import {useNavigate} from 'react-router-dom';
import "./navbar.css"

function Navbar(){

    const history= useNavigate();

    const [showNav,setShowNav]=useState(false)
    
    const scrollDetected=()=>{
    if(window.scrollY>100){
        setShowNav(true)
    }
    else{
        setShowNav(false)
    }
}

useEffect(()=>{
    window.addEventListener("scroll",scrollDetected)
    return ()=> window.removeEventListener("scroll",scrollDetected)  // cleanup function
},[])
    
return (
        <div className={`navbar ${showNav && "nav_black"}`}>
            <div className="navbar_content">
            <img
            onClick={()=>history('/')}
            alt="logo"
            className="logo"
            src="https://cdn-images-1.medium.com/max/1200/1*ty4NvNrGg4ReETxqU2N3Og.png"></img>
            <img
            onClick={()=>history('/profile')}
            alt="icon"
            className="account_icon"
            src="https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg"></img>
            </div>
        </div>
    )
}

export default Navbar