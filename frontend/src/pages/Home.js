import React from "react";
import Main from "../components/Main";
import AboutMe from "./AboutMe";
import Skills from "./Skills"
import Contact from "./Contact"

function Home() {
    
        
    return(
        <>
            <div className="home__content" id="home">
                <Main/>
                <AboutMe/> 
                <Skills/>
                <Contact/>
            </div>   
        </>
    )
}


export default Home;