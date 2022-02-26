import React from "react";
import { animateScroll as scroll } from "react-scroll"


export default function Footer(){

 
    return(
        <div className="footer__container" style={{marginLeft: "200px"}}>
            <button onClick={()=>scroll.scrollToTop()} >
                TO TOP
            </button>
        </div>
    )

}