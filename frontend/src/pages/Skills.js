import React from "react";
import insomnia from "../assets/insomnia.png"
import postman from "../assets/postman.png"
import routerDom from "../assets/react-router-dom.png"
import wordpress from "../assets/wordpress.png"
import visualStudio from "../assets/visual-studio-code.png"
import bootcamp from "../assets/bootcamp.png"
import hexagon from "../assets/hexagon.png"
import itindev from "../assets/ItinDev.png"
import solidity from "../assets/solidity.png"

export default function Skills(props) {
    
    let language = props.language
    
    return(
        <>
        <div className="skills__container" id="skills">
            <div className="skills__text">
                { language?
                    <>
                        <p className="subtittle">
                        ¿QUÉ APRENDÍ? 📔
                        </p>
                        <p >
                        Mi formación académica consta de una experiencia <i>intensa de 600 hs de Full Stack Web Development</i>. Se simuló un entorno real de trabajo durante aproximadamente 4 meses, utilizando las metodologías Agile SCRUM y <i>"Learning by doing"</i>. En este proceso llevamos adelante proyectos individuales y grupales, aplicando las tecnologías M.E.R.N. stack (MongoDB, Express, React and Node js).
                        </p>
                        <p>
                        Paralelamente también he aprendido por mi cuenta. Soy independiente, curiosa y proactiva, lo que me lleva a estar en constante aprendizaje y formación.💪
                        </p>   
                    </> 
                    :
                    <>
                        <p className="subtittle">
                        What did I learn? 📔
                        </p>
                        <p>
                        My academic education consists of an <i>intensive experience of a 600 hours Full Stack Web Development course</i>. A real working environment was simulated for approximately 4 months, using Agile SCRUM and "Learning by doing" methodologies. In this process we carried out individual and group projects, applying the technologies of the M.E.R.N. stack (MongoDB, Express, React and Node js).
                        </p>
                        <p>
                        At the same time, I have also learned on my own. I’m independent, curious and proactive, which leads me to be in constant formation.💪
                        </p>  
                    </>
                }
              
                <div className="projects-container">
                    <div className="certification__image">
                        <img src={bootcamp} alt="Bootcamp MindHub" title="Bootcamp MindHub"/>
                        <a 
                        href="https://www.credly.com/badges/64a66a6e-5e73-4245-868f-f421b2fbf310/public_url"
                        target='_blank'
                        rel="noreferrer">
                        {
                            language?
                            <p className="send-button-skill">Certificación</p>
                            :
                            <p className="send-button-skill">Certification</p>
                        }
                        
                        </a>
                    </div>
                    <div className="projects__image">
                        <div className="project-group-button">
                        <img src={hexagon} alt="Hexagon Tech Store" title="Hexagon Tech Store"/>
                        <a 
                            href="https://hexagon-techstore.herokuapp.com/"
                            target='_blank'
                            rel="noreferrer">
                                {
                            language?
                            <p className="send-button-skill">Hexagon</p>
                            :
                            <p className="send-button-skill">Hexagon</p>
                        }
                        </a>
                        </div>
                        <div className="project-group-button">
                        <img src={itindev} alt="ITinDev" title="ITinDev"/>
                        <a 
                        href=" https://itindev-mindhub.herokuapp.com/"
                        target='_blank'
                        rel="noreferrer">
                        {
                            language?
                            <p className="send-button-skill">ITindev</p>
                            :
                            <p className="send-button-skill">ITindev</p>
                        }
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills__icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5" title="HTML5"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css3" title="CSS3"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" title="Javascript"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" title="SASS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"  alt="bootstrap" title="Bootstrap"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="material Ui" title="Material UI"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongo DB" title="MongoDB" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" title="Express" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"  alt="Node Js" title="Node.js"/>
                <img src={insomnia} title="Insomnia" alt="Insomnia"></img>
                <img src={postman} title="Postman" alt="Postman"></img>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"  alt="Redux" title="Redux" />
                <img src={routerDom} title="React Router Dom" alt="React router DOM"></img>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm"  title="Npm" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" title="Git"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" title="GitHub" />
                <img src={wordpress} title="Wordpress" alt="Wordpress"></img>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" alt="heroku" title="Heroku"/> 
                <img src={visualStudio} title="Visual Studio Code" alt="Visual Studio Code"></img>
                <img src={solidity} title="Solidty" alt="Solidty"/>
           </div>
        </div>
        </>

    )

}
