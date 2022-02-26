import React, {useState} from "react";
import cerquatti from "../assets/Cerquatti.jpg"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CallToAction from "./Button";
import {Link} from "react-scroll"

export default function Main(){

    
    const [isOff, setIsOff] = useState(true)

    const turningOn = () => {
        setIsOff(!isOff)
    }

  

    return(
        <>
        <div className={isOff ? "main__container" : "main__container main__container--clicked"}>
            <div className="main__content">
                <div className={isOff ? "main__tittle" : "main__tittle main__tittle--clicked"}>
                    <div className="text-content">
                        <h1 className={"main__tittle--author"}>
                            I'm Sil Cerquatti 
                        </h1>
                        <p className={isOff ? "main__tittle--welcome" : "main__tittle--welcome--clicked"}> 
                            &amp; Welcome to my space
                        </p>
                    </div>
                    <div className={isOff ? "main__image" : "main__image main__image--clicked"} >
                        <img src={cerquatti} alt="Silvana Cerquatti">
                        </img>
                    </div>
                    <div  className={isOff ? "scroll-down" : "scroll-down scroll-down--clicked"} >
                        <Link to="aboutMe" smooth={true} duration={1000}>
                            <ExpandMoreIcon  />  
                        </Link>
                    </div>
                </div>
            </div>
            <div className="main__button" onClick={()=>turningOn()}>
                <CallToAction state={isOff}/>
            </div>
        </div>
        </>
    )

}