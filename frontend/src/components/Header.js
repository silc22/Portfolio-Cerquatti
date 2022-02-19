import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-router-dom'


export default function Header(){
    return(
        <div className="navBar">
             <div className="navBar__logo">
               
            </div>
            <div className="navBar__menu">
                <div>
                    <Link to="/">
                        <HomeIcon/> 
                        <p>Home</p>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <AutoAwesomeIcon/>
                        <p>About Me</p>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <EmojiObjectsIcon/>
                        <p>Proyects</p>
                    </Link>
                </div>
                <div>
                <Link to="/">
                    <EmailIcon/>
                    <p>Contact</p>
                </Link>
                </div>
            </div>
        </div>
    )

}