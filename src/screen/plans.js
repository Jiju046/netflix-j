import React from "react";
import { useNavigate } from "react-router-dom";
import './plan.css';

function Plan({name,quality,price}){

    const history=useNavigate();
    return (
        <div className='profilescreen__subs'>
                            <h6>{price}</h6>    
                            <h5>{name} ({quality})</h5>
                            
                            <div className="profilescreen__subscribe">
                            <button onClick={()=>history('/payment')}>Subscribe</button>
                            </div>
                            </div>
    )
}

export default Plan;