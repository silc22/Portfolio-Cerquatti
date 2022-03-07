import React from "react";
import Formularios from "../components/Formularios";
import { useParallax  } from 'react-scroll-parallax';
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
                    What can you do?
                </p>
                <p className="cartoon__bodyText">
                    oy la menor de 3 hermanos, nací en un pequeño pueblo llamado Oncativo en Argentina. Tengo 27 años. bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla oy la menor de 3 hermanos, nací en un pequeño pueblo llamado Oncativo en Argentina. Tengo 27 años. bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla   
                </p>
            </div>
            <img src={ufoImage} className="ufo-image" alt="ovni"/>
        </div>
        </>

    )

}
