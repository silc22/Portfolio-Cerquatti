import React from "react";
import Main from "../components/Main";


function Home(props) {
    
    let language = props.language
        
    return(
        <>
            <div className="home__content" id="home">
                <Main language={language}/>
            </div>   
        </>
    )
}


export default Home;