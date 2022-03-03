import React from "react";

export default function CallToAction(props) {
    
    let isOff = props.isOff

    return(
        <> 
        <div className="action__container">
            <div className={isOff ? "button__container" : "button__container button__container--clicked"}>
            {
                isOff ?  
                <p>TURN ON</p>
                : 
                <p>TURN OFF</p>
            } 
            </div>
        </div>
        </>

    )

}



