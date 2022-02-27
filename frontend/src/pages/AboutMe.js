import React, { useEffect, useState} from "react";
import axios from "axios"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cartoons from "../components/Cartoons";
import {Link} from "react-scroll"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function AboutMe() {
    
    const [stuff, setStuff] = useState([])
    const [filteredArray, setfilteredArray] = useState([])
    const [current, setCurrent] = useState(0)
    const [click, setClick] = useState(false)
    
    useEffect  (() =>{
        axios.get("http://localhost:4000/api/stuff")
        .then(res => {
            setStuff(res.data.response)
            setfilteredArray(res.data.response)
        })
        .catch(err => (console.log(err)))
    }, [])
    
    


    const showCategory = (letter) =>{
        setCurrent(0)
        setfilteredArray(stuff.filter(array => array.category.toLowerCase().startsWith(letter)))
    }
    
    const length = filteredArray.length

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length -1 : current - 1)
    }


    return(
        <>
        <div className="aboutMe__container" id="aboutMe">
        <div className="aboutMe__container-three">
                <p>WHO AM I?</p>
                <p>Soy la menor de 3 hermanos, nací en un pequeño pueblo llamado Oncativo en Argentina. Tengo 27 años. bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla </p>
            </div>
            <div className="aboutMe__container-onetwo">
                <div className="aboutMe__container-one">
                    <h2>Favorites stuff</h2>
                    <div className="slider__content">
                        <div className="left-arrow" >
                            <ArrowBackIosIcon onClick={()=>prevSlide()}/>
                        </div>
                        <div className="slider">
                            <div className="img__container"  >
                                {filteredArray?.map((favorite, index)=>
                                <div key={index} className={index === current ? "slide_active" : "slide_inactive" }> 
                                    { index === current && 
                                        <>
                                        <img src={favorite.image} alt={favorite.name} key={favorite._id} >
                                        </img> 
                                        <p>
                                            {favorite.name}
                                        </p> 
                                        </>}
                                </div>)}
                            </div>
                        </div>
                        <div className="right-arrow" >
                            <ArrowForwardIosIcon onClick={()=>nextSlide()}/>
                        </div>
                    </div>
                    <div className="buttons__aboutMe">
                        <div onClick={()=>showCategory("m")}>
                            MOVIES
                        </div>
                        <div onClick={()=>showCategory("s")}>
                            SERIES
                        </div>
                        <div onClick={()=>showCategory("g")}>
                            GAMES
                        </div>
                        <div onClick={()=>showCategory("")}>
                            ALL
                        </div>
                    </div>
                </div>
                <Cartoons/>
            </div>
        </div>
        </>

    )

}

// : "scroll-down scroll-down--clicked"