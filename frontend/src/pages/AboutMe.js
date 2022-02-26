import React, { useEffect, useState} from "react";
import axios from "axios"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function AboutMe() {
    
    

    
    const [stuff, setStuff] = useState([])
    let newArray = [...stuff]
    let noFilter = [...stuff]
    const [current, setCurrent] = useState(0)
    const [filteredArray, setfilteredArray] = useState([...stuff])
    const length = filteredArray.length
 
    useEffect(() =>{
        axios.get("http://localhost:4000/api/stuff")
        .then(res => setStuff(res.data.response))
        .catch(err => console.log(err))
    }, [setStuff])
    
    if(setStuff.length <= 0){
        return null
    }
        
    
    const showCategory = (letter) =>{
        setfilteredArray(newArray.filter(array => array.category.toLowerCase().startsWith(letter)))
    }

    const showAll = () =>{
        setfilteredArray(newArray)
    }


    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1)

    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length -1 : current - 1)

    }



    return(
        <>
        <div className="aboutMe__container" id="aboutMe">
            <div className="aboutMe__container-one">
                <h2>Favorites stuff</h2>
                <button onClick={()=>showCategory("m")}>
                   MOVIES
               </button>
               <button onClick={()=>showCategory("s")}>
                   SERIES
               </button>
               <button onClick={()=>showCategory("g")}>
                   GAMES
               </button>
               <button onClick={()=>showAll()}>
                   SHOW ALL
               </button>
                <div className="slider__content">
                    <div className="left-arrow" >
                        <ArrowBackIosIcon onClick={()=>prevSlide()}/>
                    </div>
                    <div className="slider">
                        <div className="img__container"  >
                            {filteredArray.map((favorite, index)=>
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
        </div>
        </>

    )

}
