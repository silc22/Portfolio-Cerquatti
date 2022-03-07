import React from "react";
import button from "../assets/button.png"
import buttonOn from "../assets/buttonOn.png"


export default function CallToAction(props) {
    
    let isOff = props.isOff

    return(
        <> 
        <div className={ "action__container"}>
            <div className={isOff ? "button__container" : "button__container button__container--clicked"}>
            {
                isOff ?  
                <img src={button} alt="button"/>
                : 
                <img src={buttonOn} alt="button"/>
            } 
            </div>
        </div>
        </>

    )

}



