import React, { useEffect, useState} from "react";
import axios from "axios"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cartoons from "../components/Cartoons";
import ButtonToc from "../components/ButtonToc"


export default function AboutMe() {
    
    const [stuff, setStuff] = useState([])
    const [filteredArray, setfilteredArray] = useState([])
    const [current, setCurrent] = useState(0)
    const [toc, setToc] = useState(true)
    
    useEffect  (() =>{
        axios.get("http://localhost:4000/api/stuff")
        .then(res => {
            setStuff(res.data.response)
            setfilteredArray(res.data.response)
        })
        .catch(err => (console.log(err)))
    }, [])
    
    
    const turningOn = () => {
        setToc(!toc)
    }

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
                <div className="aboutMe__container-three">
                    <p>WHO AM I?</p>
                    <p>Soy la menor de 3 hermanos, nací en un pequeño pueblo llamado Oncativo en Argentina. Tengo 27 años. bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla 
                    </p>
                </div>
                <Cartoons state={toc} />
            </div>
            <div className="toc__button" onClick={()=>turningOn()}>
                <ButtonToc state={toc}/>
            </div>
            <div className="aboutMe__container-onetwo">
                <div className={toc? "aboutMe__container-one" : "aboutMe__container-one toc"}>
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
                <div className="aboutMe__container-three">
                    <p>WHAT I WANT?</p>
                    <p>Soy la menor de 3 hermanos, nací en un pequeño pueblo llamado Oncativo en Argentina. Tengo 27 años. bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla  </p>
                </div>
            </div>
        </div>
        </>

    )

}

// : "scroll-down scroll-down--clicked"