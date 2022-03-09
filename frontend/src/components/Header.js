import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-scroll'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(){

    const [open, setOpen] = useState(false)


    function openNav(){
        setOpen(!open)
    }

    return(
        <>
            { !open? 
                <div className="navBar__menuIcon" onClick={()=>openNav()}>
                    <MenuIcon/> 
                </div>
                :
                <div className={open? "navBar navBarMobile" : "navBar-closed"}>
                        <div className="navBar__open" onClick={()=>openNav()}>
                            <CloseIcon/>
                        </div>
                    <div className="navBar__menu navBarMobile_icons">
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
            }
        </>
    )

}