import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-scroll'


export default function Header(){

 

    return(
        <div className="navBar">
            <div className="navBar__kitty">
               
            </div>
            <div className="navBar__menu">
                <div className="navBar__menu--icons">
                    <Link to="home" smooth={true} duration={1000}>
                        <HomeIcon/> 
                        <p>Home</p>
                    </Link>
                </div>
                <div className="navBar__menu--icons">
                    <Link to="aboutMe" smooth={true} duration={1000}>
                        <AutoAwesomeIcon/>
                        <p>About Me</p>
                    </Link>
                </div>
                <div className="navBar__menu--icons">
                    <Link to="skills" smooth={true} duration={1000}>
                        <EmojiObjectsIcon/>
                        <p>Skills</p>
                    </Link>
                </div>
                <div className="navBar__menu--icons">
                    <Link to="contact" smooth={true} duration={1000}>
                        <EmailIcon/>
                        <p>Contact</p>
                    </Link>
                </div>
            </div>
        </div>
    )

}