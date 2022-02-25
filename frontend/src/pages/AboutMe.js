import React, { useEffect, useState} from "react";
import axios from "axios"



export default function AboutMe() {
    
    const [movies, setMovies] = useState([])
 
    useEffect(() =>{
        axios.get("http://localhost:4000/api/movies")
        .then(res => setMovies(res.data.response))
        .catch(err => console.log(err))
    }, [])
  
    return(
        <>
        <div className="aboutMe__container" id="aboutMe">
            {movies.map((movie)=> <img src={movie.image} style={{width:'250px', display: 'flex'}}></img>)}
        </div>
        </>

    )

}
