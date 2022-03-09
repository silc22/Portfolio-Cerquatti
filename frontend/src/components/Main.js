import React, {useState} from "react";
import cerquatti from "../assets/Cerquatti.jpg"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CallToAction from "./CallToAction";
import {Link} from "react-scroll"
import { useParallax  } from 'react-scroll-parallax';
import astronaut from "../assets/astronauta.png"
import planet from "../assets/planet.png"

export default function Main(props){

    let language = props.language

    const { ref } = useParallax({ speed: -20 });
    const [isOff, setIsOff] = useState(true)

    const turningOn = () => {
        setIsOff(!isOff)
    }

  

    return(
        <>
        <div className={isOff ? "main__container" : "main__container main__container--clicked"}>
            <img src={astronaut} alt="astronaut" ref={ref} className={isOff ? "astronaut" : "astronaut--clicked" }/>
            <div className="main__content">
                <div className={isOff ? "main__tittle" : "main__tittle main__tittle--clicked"}>
                    {
                    language?
                    <div className="text-content">
                        <h1 className={"main__tittle--author"}>
                            Soy Sil Cerquatti 
                        </h1>
                    
                        <p className={isOff ? "main__tittle--welcome" : "main__tittle--welcome--clicked"}> 
                            &amp;  Bienvenido a mi espacio
                        </p> 
                    </div>
                    :
                    <div className="text-content">
                    <h1 className={"main__tittle--author"}>
                        I'm Sil Cerquatti 
                    </h1>
                   
                    <p className={isOff ? "main__tittle--welcome" : "main__tittle--welcome--clicked"}> 
                        &amp; Welcome to my space
                    </p> 
                </div>
                    }
                    
                   
                    <div className={isOff ? "main__image" : "main__image main__image--clicked"} >
                        <img src={cerquatti} alt="Silvana Cerquatti">
                        </img>
                    </div>
                    <div className="callToAction__container">
                        <div onClick={()=>turningOn()} >
                            <CallToAction isOff={isOff} />
                        </div>
                    </div>
                    <div  className={isOff ? "scroll-down" : " scroll-down scroll-down--clicked"} >
                        <Link to={isOff? "" : "aboutMe"} smooth={true} duration={1000}>
                            {isOff? <ExpandLessIcon/> : <ExpandMoreIcon  />  }
                        </Link>
                    </div>
                </div>
            </div>
            <div className="main__button">
            <img src={planet} alt="planeta" className={isOff? "planet" : "planet--clicked"}>
            </img>
            </div>
        </div>
        </>
    )

}