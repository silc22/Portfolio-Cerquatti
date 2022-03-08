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
                    <p>
                        WHO AM I?
                    </p>
                    <p>
                        Nací en un pequeño pueblo llamado Oncativo (provincia de Cordoba, Argentina). Sin embargo, crecí en zona rural hasta mis 4 años de edad. Era todo una aventura estar rodeada de naturaleza y animales de granja. Mi padre era agricultor y mi madre ama de casa. Ser la menor de 3 hermanos implicó aprender a ser tolerante ante una pelea; a ser competitiva, como cuando luchaba por ganar en lo juegos del Family Computer con mi hermano mayor; a compartir largas horas de juegos; a cooperar en las travesuras y negociar en los conflictos. Tuve la gracia de tener una infancia hermosa y una adolescencia rodeada de amigos y amigas con una enciclopedia de anecdotas. 
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
                    <p>Siempre creí que sabia lo que quería pero no consideré que el paso del tiempo va generando nuevas perspectivas de la vida,  y que por lo tanto lo que ayer era un objetivo de vida, hoy ya no lo era. 
Comencè a los 17 años a estudiar derecho en la UNC, a mis 23 años tuve mi primera pasantía en el area de legales de una empresa un año, luego me desempeñé en un estudio jurídico por casi 3 años mas. A esa altura solo restaban 10 materias para graduarme de abogada, pero me di cuenta que no era lo que quería en mi vida. 
Empecé a programar a mis 27 años, era un deseo que estuvo latente siempre en mi pero que nunca me animaba a hacerlo, y hoy me arrepiento de no haber comenzado antes, pero las cosas por algo suceden. Paralelamente al cambio profesional nació la idea de emigrar al exterior, en busca de oportunidades y de una mejor calidad de vida. Es así que actualmente estoy viviendo fuera de Argentina. Trabajando muy duro los nuevos deseos se fueron tranformando en una realidad para mi. </p>
                </div>
            </div>
        </div>
        </>

    )

}

// : "scroll-down scroll-down--clicked"