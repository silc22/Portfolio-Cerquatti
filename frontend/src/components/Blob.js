import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web"


export default function Blob() {
    
    const container = useRef(null)

        useEffect(() =>{
            lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: false,
                animationData: require("../assets/ameba-blob.json"),
            })
        }, [])

        


    return(
        <>
        <div className="blob__container" >
           <div className="blob__animation" ref={container}>
           </div>
        </div>
        </>

    )

}
