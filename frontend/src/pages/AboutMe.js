import React, {useEffect, useState} from "react";
import axios from "axios"



export default function AboutMe() {
    
    const [films, setFilms] = useState([])

    useEffect(()=>{
        axios.get('https://ghibliapi.herokuapp.com/films')
        .then(res => setFilms(res.data))
        .catch(err => console.log(err))
    })


    return(
        <>
        <div className="aboutMe__container">
           {films.map((film)=>  <img src={film.image} alt={film.title} key={film.title}></img>
           )} 


        </div>
        </>

    )

}
