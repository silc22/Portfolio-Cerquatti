import React, { useEffect, useRef } from "react";
import lottie from "lottie-web"


export default function Loader() {
    
    const container = useRef(null)

        useEffect(() =>{
            lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: require("../assets/fuchsia-balls.json"),
            })
        }, [])



    return(
        <>
        <div className="loader__container" >
           <div className="loader__animation" ref={container}>
           </div>
        </div>
        </>

    )

}