import React from "react";
import ufoImage from "../assets/ufo.png"

export default function CallToAction(props) {
    
    let isOff = props.isOff

    return(
        <> 
            <div className={isOff ? "button__container" : "button__container button__container--clicked"}>
            {
                isOff ?  
                <img src={ufoImage} className="ufo-image"></img>
                : 
                <img src={ufoImage} className="ufo-image" ></img>
            } 
            </div>
        </>

    )

}



