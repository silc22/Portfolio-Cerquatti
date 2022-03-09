import React from "react";
import Formularios from "../components/Formularios";
import ufoImage from "../assets/ufo.png"


export default function Contact(props) {
    
    let language = props.language

    return(
        <>
        <div className="contact__container" id="contact">
            <div className="contact__form">
            <Formularios language={language}/>
            </div>
            <div className="contact__text">
                {
                    language?
                    <>
                        <p className="contact__tittle">
                        QUÉ PUEDO OFRECER?
                        </p>
                        <ul className="contact__bodyText">
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
                    </>
                    :
                    <>
                        <p className="contact__tittle">
                            WHAT CAN I OFFER?
                        </p>
                        <ul className="contact__bodyText">
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
                    </>
                }
            </div>
            <img src={ufoImage} className="ufo-image" alt="ovni"/>
        </div>
        </>

    )

}
