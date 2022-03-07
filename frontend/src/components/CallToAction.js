import React from "react";
import button from "../assets/buttonOn.png"
import buttonOn from "../assets/button.png"


export default function CallToAction(props) {
    
    let isOff = props.isOff

    return(
        <> 
        <div className={ "action__container"}>
            <div className={isOff ? "button__container" : "button__container button__container--clicked"}>
            {
                isOff ?  
                <img src={buttonOn} alt="button"/>
                : 
                <img src={button} alt="button"/>
            } 
            </div>
        </div>
        </>

    )

}



