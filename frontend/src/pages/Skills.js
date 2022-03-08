import React from "react";
import insomnia from "../assets/insomnia.png"
import postman from "../assets/postman.png"
import routerDom from "../assets/react-router-dom.png"
import wordpress from "../assets/wordpress.png"

export default function Skills() {
    
    
    return(
        <>
        <div className="skills__container" id="skills">
           
            <div className="skills__text">
                <p className="cartoon__tittle">
                    What can I offer?
                </p>
                <p className="cartoon__bodyText">
                    oy la menor de 3 hermanos, nací en un pequeño pueblo llamado Oncativo en Argentina. Tengo 27 años. bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla oy la menor de 3 hermanos, nací en un pequeño pueblo llamado Oncativo en Argentina. Tengo 27 años. bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla blabla bla   
                </p>
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" alt="heroku" title="Heroku"/> 
                <img src={wordpress} title="Wordpress" alt="Wordpress"></img>
           </div>
        </div>
        </>

    )

}
