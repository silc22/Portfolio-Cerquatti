import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import AboutMe from "../pages/AboutMe"
import Contact from "./Contact";
import Proyects from "./Proyects";


function Home() {
    
    
    return(
        <>
        <div className="home__container">
            <Header/>
            <div className="home__content" >
                <Main/>                
                <AboutMe/>
                <Proyects/>
                <Contact/>
            </div>
        </div>   
        </>

    )

}

export default Home;