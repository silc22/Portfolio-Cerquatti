import React from "react";

export default function ButtonToc(props) {
    
    let state = props.state


    return(
        <> 
        <div>
            <div className={state ? "button__container--toc" : "button__container--toc button__container--clicked--toc"}>
            {
                state ?  
                <p>OCD?</p>
                : 
                <p>NOT REALLY</p>
            } 
            </div>
        </div>
        </>

    )

}