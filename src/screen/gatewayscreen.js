import React from 'react';
import './gatewayscreen.css';

function Gatewayscreen(){

    const handleClick=(e)=>{
        e.preventDefault();
        alert("LOL 😂 this site is still not ready to accept payment.Anyway thank you!!")
    }

    return(
        <div className='gatewayscreen'>
            <div className='gatewayscreen__content'>
                <div className='gatewayscreen__top'>
            <h3>Payment Details</h3>
            <span className='gatewayscreen__logo'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54K0ER26RNsm6tMv4-Gg1y-GHUIhMtBk3YQ&usqp=CAU' width="150" alt="visa card and mastercard logo png"></img>

            </span>
            </div>
            <div >
            <form className='gatewayscreen__form'>
                <h5>Name on Card</h5>
                <input></input>
                <h5>Card Number</h5>
                <input></input>
                <h5>CVC</h5>
                <input placeholder='ex.354'></input>
                <h5>Expiration Month/Year</h5>
                <input placeholder='MM/YYYY'></input> 
                <button onClick={handleClick}>Pay now!</button>  

            </form>
            </div>
            </div>
        </div>
    )
}

export default Gatewayscreen;