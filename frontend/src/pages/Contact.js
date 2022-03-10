import React from "react";
import Formularios from "../components/Formularios";


export default function Contact(props) {
    
    let language = props.language

    return(
        <>
        <div className="contact__container" id="contact">
            <div className="contact__text">
                {
                    language?
                    <>
                        <p className="subtittle">
                        👇QUÉ PUEDO OFRECER?👇
                        </p>
                        <ul className="contact__bodyText">
                            <li>📌 Potencial suficiente para poder desempeñarme y contribuir con mis conocimientos a los objetivos propuestos.
                            </li>
                            <li>📌 Capacidad y motivacion para seguir aprendiendo.
                            </li>
                            <li>📌 No menos importante, inteligencia emocional o <i>"soft skills"</i> para desempeñarme en un entorno laboral profesional.
                            </li>      
                        </ul>
                        <p>
                            Si crees interesante mi perfil, no dudes en escribirme.📲
                        </p>
                    </>
                    :
                    <>
                        <p className="subtittle">
                        👇WHAT CAN I OFFER?👇
                        </p>
                        <ul className="contact__bodyText">
                            <li>
                            📌 Enough potential to be able to perform and contribute with my knowledge to the given goals.
                            </li>
                            <li>
                            📌 Capability and motivation to keep learning.
                            </li>
                            <li>
                            📌 Last but not least, emotional intelligence (or soft skills) to perform in a professional work environment
                            </li>      
                        </ul>
                        <p>
                        If you find my profile interesting, do not hesitate to contact me.📲
                        </p>
                    </>
                }
            </div>
            <div className="contact__form">
            <Formularios language={language}/>
           
            </div>
        </div>
        </>

    )

}
