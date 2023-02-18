import React, { useEffect,useState } from "react";
import "./banner.css"
import requests from "./requests";
import axios from "./axios";
function Banner(){
    const [movie,setMovie]=useState([])

    useEffect(()=>{
        async function fetchData(){
            const response=await axios.get(requests.fetchNetflixOriginals) //get baseurl from axios
            //and take originals from reqests=>`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
            setMovie(
                response.data.results[Math.floor(Math.random() * response.data.results.length-1)] //it gives an array of object (random number upto length of array
                )
                return response;
        }
        
        fetchData();                                                                                               
        

    },[]);
    console.log(movie)
    

function truncate(string,n){  //after certain character displays '...'(shorten)
    return string?.length>n ? string.substr(0,n-1) + "...":string  // ? optional chaining part the string n numbers and add ...
}


    return(
        <header className="banner" style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,//movie is optional? because the starting value is []
            backgroundSize: "cover",
            backgroundPosition:"center top"
        }}>
            <div className="banner_content">
                <h1 className="banner_title">{movie?.name||movie?.title||movie?.original_name}</h1>
                <div className="banner_buttons">
                {/* <button className="banner_button">Play</button>
                <button className="banner_button">My List</button> */}
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>
            <div className="banner_fadeBottom" />
        </header>
        
    )
}

export default Banner