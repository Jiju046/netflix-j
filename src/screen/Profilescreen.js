import React from 'react';
import './Profilescreen.css';
import Navbar from '../navbar';
import { useSelector } from 'react-redux';
import {selectUser} from '../features/userSlice'
import {auth} from '../firebase';
import Plan from './plans'

function Profilescreen(){

    const currentUser=useSelector(selectUser) 
    return(
        <div className='profilescreen'>
            <Navbar />
            <div className='profilescreen__body'>
                <h1>Edit Profile</h1>
                <div className='profilescreen__info'>
                    <img src='https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg'
                     alt='profile avatar' />
                     <div className='profilescreen__details'>
                        <h2>{currentUser.email}</h2>
                        <div className='profilescreen__plans'>
                            <h3>Plans</h3>
                            <Plan name={'Mobile'} quality={'upto 480p(SD)'} price={'149 INR'} />
                            <Plan name={'Basic'} quality={'upto 720p(HD)'} price={'199 INR'} />
                            <Plan name={'Standard'} quality={'upto 1080p(Full HD)'} price={'399 INR'} />
                            <Plan name={'Premium'} quality={'upto 4K+HDR (Ultra HD)'} price={'599 INR'} />
                            <button onClick={()=>auth.signOut()} className='profilescreen__signout'>
                                Sign out
                            </button>
                        </div>

                     </div>
                </div>
            </div>

        </div>
    )
}

export default Profilescreen;
