import React from "react";
import "./Homescreen.css"
import Navbar from "../navbar";
import Banner from "../banner"
import Row from "../row"
import requests from "../requests"

function Homescreen(){
    return (
        <div className="homescreen">
            <Navbar />
            <Banner />
            <Row 
            key="1"
            title='NETFLIX ORIGINALS'
            fetchURL={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row 
            key="2"
            title='Top Rated'
            fetchURL={requests.fetchTopRated}
            />
            <Row 
            key="3"
            title='Trending Now'
            fetchURL={requests.fetchTrending}
            />
            <Row 
            key="4"
            title='Action Movies'
            fetchURL={requests.fetchActionMovies}
            />
            <Row 
            key="5"
            title='Comedy Movies'
            fetchURL={requests.fetchComedyMovies}
            />
            <Row 
            key="6"
            title='Horror Movies'
            fetchURL={requests.fetchHorrorMovies}
            />
            <Row 
            key="7"
            title='Roamantic Movies'
            fetchURL={requests.fetchRomanceMovies}
            />
            <Row 
            key="8"
            title='Documentaries'
            fetchURL={requests.fetchDocumentaries}
            />

            {/* lists */}
        </div>
    )
}
export default Homescreen