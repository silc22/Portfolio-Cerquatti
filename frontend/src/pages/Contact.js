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
                <ul className="cartoon__bodyText">
                    <li>
                    Potencial suficiente para poder desempeñarme y contribuir con mis conocimientos a los objetivos propuestos.
                    </li>
                    <li>
                        Capacidad y motivacion para seguir aprendiendo.
                    </li>
                    <li>
                        No menos importante, inteligencia emocional o <i>"soft skills"</i> para desempeñarme en un entorno laboral profesional.
                    </li>      
                </ul>
                <p>
                    Si crees interesante mi perfil, no dudes en escribirme.
                </p>
            </div>
            <img src={ufoImage} className="ufo-image" alt="ovni"/>
        </div>
        </>

    )

}
