import React, { useEffect, useState} from "react";
import axios from "axios"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cartoons from "../components/Cartoons";

export default function AboutMe() {
    
    const [stuff, setStuff] = useState([])
    const [filteredArray, setfilteredArray] = useState([])
    const [current, setCurrent] = useState(0)
    
    useEffect (async () =>{
        const data = await axios.get("http://localhost:4000/api/stuff")
        setStuff(data.data.response)
        setfilteredArray(data.data.response)
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
            <div className="aboutMe__container-onetwo">
                <div className="aboutMe__container-one">
                    <h2>Favorites stuff</h2>
                    <div className="buttons__aboutMe">
                        <button onClick={()=>showCategory("m")}>
                            MOVIES
                        </button>
                        <button onClick={()=>showCategory("s")}>
                            SERIES
                        </button>
                        <button onClick={()=>showCategory("g")}>
                            GAMES
                        </button>
                        <button onClick={()=>showCategory("")}>
                            SHOW ALL
                        </button>
                    </div>
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
                </div>
                <Cartoons/>
            </div>
            <div className="aboutMe__container-three">
                <p>Lorem</p>
            </div>
        </div>
        </>

    )

}

