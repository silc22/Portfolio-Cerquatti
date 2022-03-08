import React from "react";
import spanish from "../assets/spanish.png"
import english from "../assets/english.png"

export default function Language(props) {
    
    let language = props.language

    return(
        <>
        
            <div className="language__content">
                <img src={spanish}  alt="spanish" className={language? "language-on" : "language-off"}>
            
                </img>
                <img src={english}  alt="english" className={!language? "language-on" : "language-off"}>
         
                </img>  
            </div>
  
        </>

    )

}

