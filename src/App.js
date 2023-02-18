import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './screen/Homescreen';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Loginscreen from "./screen/LoginScreen";
// import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { logout,login,selectUser } from './features/userSlice';
import Profilescreen from './screen/Profilescreen';
import Gatewayscreen from './screen/gatewayscreen';

function App() {
  const user=useSelector(selectUser);//to load homepage it checks user is null or loggedin
  const dispatch=useDispatch();


  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((user)=>{  //observer it will listen whether the user is logged in or not
      //this snippet is for persistance sign in
      if(user){
        dispatch(login({
          uid:user.uid,
          email:user.email

      }))
        // logged in

        console.log(user)
      }
      else{
        dispatch(logout())
        //logged out
        console.log("hi")
      }
      
    })
 return unsubscribe; //cleanup function it will replace the old with new one

  },[dispatch]);
  


  return (
  <div className="app">
    <BrowserRouter>
    
      {!user?(<Loginscreen />):   
      (<Routes>
      <Route path="/" element= {<Homescreen />} />
      {/* if you add path '/' takes to homescreen */}
    <Route path='/profile' element={<Profilescreen />} />

    <Route path='/payment' element={<Gatewayscreen />} />
    </Routes>)
      }
      
      

    
    </BrowserRouter>
  </div>
    )
}

export default App;
