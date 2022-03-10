import React, { useEffect, useState} from "react";
import axios from "axios"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cartoons from "../components/Cartoons";


export default function AboutMe(props) {
    
    let language = props.language

    const [stuff, setStuff] = useState([])
    const [filteredArray, setfilteredArray] = useState([])
    const [current, setCurrent] = useState(0)
    
    useEffect  (() =>{
        axios.get("https://silvana-cerquatti.herokuapp.com/api/stuff")
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
            <div className="aboutMe__container-onetwo">
                <div className="aboutMe__container-three">
                    {
                        language?
                        <>
                            <p className="subtittle">
                                ¿QUIEN SOY? 🙋‍♀️
                            </p>
                            <p>
                                Nací en un pequeño pueblo llamado Oncativo (provincia de Córdoba, Argentina). Sin embargo, crecí en zona rural hasta mis 4 años de edad 🚜🌾. Era todo una aventura estar rodeada de naturaleza y animales de granja 🐓. Mi padre era agricultor y mi madre ama de casa.
                            </p>
                            <p>
                            Ser la menor de 3 hermanos implicó aprender a ser tolerante 😌, a ser competitiva (como cuando luchaba por ganar jugando al Family Computer con mi hermano mayor 😂), a compartir largas horas de juegos, cooperar en las travesuras y negociar en los conflictos 🤝. Tuve la gracia de tener una infancia hermosa y una adolescencia rodeada de amigos y amigas con una enciclopedia de anécdotas🤗. 
                            </p>
                        </>
                        :
                        <>
                            <p className="subtittle">
                                WHO AM I? 🙋‍♀️
                            </p>
                            <p>
                            I was born in a little city called Oncativo (province of Córdoba, Argentina). Nevertheless, I grew up on a farm until I turned 4 years old 🚜🌾. It was a great adventure to be surrounded by nature and farm animals 🐓. My dad was a farmer and my mom, a housewife. 
                            </p>
                            <p>
                                Being the last of three brothers made me learn to be tolerant😌, to be competitive (just like those times when I played my brother at Family Computer games), to share, to cooperate (to do pranks) and to negotiate in conflicts🤝. I’ve been blessed for having an amazing childhood, and also teenage years surrounded by friends and an encyclopedia of anecdotes🤗.
                            </p>
                        </>
                    }
                    
                </div>
                <Cartoons language={language}/>
            </div>
            <div className="aboutMe__container-onetwo">
            <div className="aboutMe__container-three">
                    {
                    language?
                    <>
                        <p className="subtittle">¿QUÉ QUIERO? 🤔</p>
                        <p>Siempre creí saber lo que quería 😵, pero el paso del tiempo va generando nuevas perspectivas de la realidad y, por lo tanto, nuevos deseos. Lo que ayer era un objetivo de vida, hoy ya no lo es 🤷‍♀️.
                        </p>
                        <p>
                        Comencé a los 17 años a estudiar Derecho ⚖️📚. A mis 23 años inicié mis primeras experiencias laborales en legales, hasta mis 27 años; sólo restaban 10 materias para graduarme de abogada, pero me di cuenta de que no era lo que quería🙅. 
                        </p>
                        <p>
                        Empecé a programar a mis 27 años 👩‍💻; siempre fue una asignatura pendiente. Paralelamente al cambio profesional, nació la idea de emigrar al exterior en busca de oportunidades y de una mejor calidad de vida. Es así que actualmente estoy viviendo fuera de Argentina✈️.
                        Hoy lo que quiero es poder vivir de la programación y seguir trabajando duro para transformar mi realidad💪.
                        </p>
                        <p>
                        Soy una entusiasta de las criptomonedas y finanzas descentralizadas.
                        Actualmente estoy aprendiendo <b><i>Solidity</i> para desarrollar <i>smart contracts.</i></b>
                        </p>
                    </>
                        :
                    <>
                    <p className="subtittle">WHAT I WANT? 🤔</p>
                    <p>I’ve always believed that I knew what I wanted 😵, pero the course of time generates new perspectives of reality and, therefore, new desires. What was a life goal yesterday, today it isn’t 🤷‍♀️.
                    </p>
                    <p>
                    I started Law school at 17 ⚖️📚. When I reached 23 I began my first job in this field, and so it continued until I turned 27. I was only 10 courses away from graduating to become a lawyer, when I realized that it wasn’t what I wanted 🙅.
                    </p>
                    <p>
                    I began to program at 27 years old 👩‍💻. It was a pending subject for me. At that time, I also came up with the idea of migrating to search for opportunities and a better life quality. Consequently, I’m currently living outside Argentina ✈️.
                    Today, what I want is to make a living from programming and keep working hard to transform my reality💪.
                    </p>
                    <p>
                     I'm a big enthusiast of crypto-currencies and decentralized economies. 
                     Currently I'm learning <b><i>Solidity</i> to develop <i>smart contracts.</i></b>
                    </p>
                    </>
                    }
                    
                </div>
                <div className="aboutMe__container-one">
                    { language? 
                        <h2>Mis Favoritos</h2>
                        :
                        <h2>Favorites stuff</h2>
                        }
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
                            {language? "PELICULAS" : "MOVIES"}
                        </div>
                        <div onClick={()=>showCategory("s")}>
                            SERIES
                        </div>
                        <div onClick={()=>showCategory("g")}>
                        {language? "JUEGOS" : "GAMES"}
                        </div>
                        <div onClick={()=>showCategory("")}>
                        {language? "TODO" : "ALL"}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>

    )

}

// : "scroll-down scroll-down--clicked"