import React from "react";

export default function CallToAction(props) {
    
    let state = props.state

    return(
        <> 
        <div className="action__container">
            <div className={state ? "button__container" : "button__container button__container--clicked"}>
            {
                state ?  
                <p>TURN ON</p>
                : 
                <p>TURN OFF</p>
            } 
            </div>
        </div>
        </>

    )

}