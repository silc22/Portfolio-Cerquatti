import React from "react";

export default function ButtonToc(props) {
    
    let language = props.language
    let state = props.state


    return(
        <> 
        <div>
            {
            language?
            <div className={state ? "button__container--toc" : "button__container--toc button__container--clicked--toc"}>
                {
                    state ?  
                    <p>TOCS?</p>
                    : 
                    <p>NO TOCS</p>
                } 
                </div>
            :
            <div className={state ? "button__container--toc" : "button__container--toc button__container--clicked--toc"}>
            {
                state ?  
                <p>OCD?</p>
                : 
                <p>NOT REALLY</p>
            } 
            </div>
            }
            
        </div>
        </>

    )

}