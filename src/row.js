import React,{useState,useEffect} from "react";
import "./row.css"
import axios from "./axios";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'

function Row({title,fetchURL,isLargeRow}){

    const opts={
        height:'300',
        width:'100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
    };

    const [movies,setMovies]=useState([])
    const [trailerUrl,setTrailerUrl]=useState('');

    const imageBaseURL="https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        async function fetchMovie(){ 
        const response= await axios.get(fetchURL)
        setMovies(response.data.results)
        return response

        }
        fetchMovie()
    },[fetchURL])
    console.log(movies);

    // const handleClick = async (movieName) => {
    //     const url = await movieTrailer(movieName);
    //     setTrailerUrl(url);
  
    const handleClick= (movie) => { //the movie which is clicked through onclick
            if(trailerUrl){
                setTrailerUrl('');
    }
            //below line is function from movie-trailer to search movies so it will give the trailer
            else{
                
                movieTrailer(null ,{ tmdbId: movie.id})
            .then((url)=>{
              console.log("url is "+url);
              const urlParams=new URLSearchParams(new URL(url).search);
              console.log("urlParamsn"+urlParams);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error)=> console.log(error));
        }
    }
            
            
            // movieTrailer(movie?.name || "") //movie-trailer is just to fetch url
            
            // .then((url)=>{  // https://youtube.com/search/?q=fdgghhg3243
            //     console.log(url)


                //  Example let url = new URL("https://www.example.com/index.html");
//                 console.log(url.protocol); // outputs "https:"
                // console.log(url.hostname); // outputs "www.example.com"
                // console.log(url.pathname); // outputs "/index.html"
    //             const urlParams=new URLSearchParams(new URL(url).search); //=>thins after '?'
    //             setTrailerUrl(urlParams.get('v')) //it gives values of q after ?
    //         }
    //         )
    //         .catch((err)=>console.log(err))
    //     }
    // }

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
            {movies.map((movie)=>(
            
                ((isLargeRow && (movie.poster_path))||(!isLargeRow && movie.backdrop_path))&& //IT SHOULD BE FROM ORIGINAL OR THIRD PARTY MOVIES OR ELSE IMG WONT RUN
                (<img className={`row_poster ${isLargeRow&& 'row_posterLarge'}`}
                 key={movie.id} 
                 onClick={()=>handleClick(movie)}
                 src={`${imageBaseURL}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.title||movie.title} />)
                
            
    ))}
    </div>
    {trailerUrl && 
    (<div>
        <botton onClick={()=>setTrailerUrl(false)} style={{fontSize:'3rem',color: "red",marginLeft:'90%',cursor:"pointer"}}>x</botton>
        <Youtube videoId={trailerUrl} opts={opts} />
    
    </div>)}
        </div>
        
    )
}

export default Row