import React from "react";
import Formularios from "../components/Formularios";
import ufoImage from "../assets/ufo.png"


export default function Contact() {
    

    return(
        <>
        <div className="contact__container" id="contact">
            <div className="contact__form">
            <Formularios/>
            </div>
            <div className="contact__text">
                <p className="cartoon__tittle">
                    What can I offer?
                </p>
                <p className="cartoon__bodyText">
                   Considero tener el potencial suficiente para poder ejercer, explotar y aportar de manera profesional mis conocimientos, con la capacidad y voluntad suficiente para seguir aprendiendo. Y no menos importante, todo ello reposa sobre una estructura adquirda de inteligencia emocional o soft skills para desempeñarme.      
                   Si crees interesante mi perfil no dudes en contactarme. 
                </p>
            </div>
            <img src={ufoImage} className="ufo-image" alt="ovni"/>
        </div>
        </>

    )

}
