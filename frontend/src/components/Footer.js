import React from "react";
import { animateScroll as scroll } from "react-scroll"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer(props){

    let language= props.language

    return(
        <>
            <div className="footer__container">
                <div className="footer__icons">
                <a
                    href="https://www.linkedin.com/in/silvana-cerquatti/"
                    target='_blank'
                    rel="noreferrer"
                    >
                    <LinkedInIcon/>
                    </a>
                    <a
                    href="https://t.me/silc1994"
                    target='_blank'
                    rel="noreferrer"
                    >
                    <TelegramIcon/>
                    </a>
                    <a
                    href="https://github.com/silc22"
                    target='_blank'
                    rel="noreferrer"
                    >
                    <GitHubIcon/>
                    </a>
                    <a
                    href="mailto:silcerquatti@gmail.com"
                    target='_blank'
                    rel="noreferrer"
                    >
                    <AlternateEmailIcon/>
                    </a>
                </div>
                <div className="footer__text">
                   {
                       language?
                       <p>
                        Página desarrollada por <i>Sil Cerquatti</i> con amor 💜 
                        </p>
                       :
                       <p>
                            Developed by <i>Sil Cerquatti</i> with love 💜
                        </p>
                   } 
                </div>
                <div className="button__top">
                    <ArrowCircleUpIcon onClick={()=>scroll.scrollToTop()}/>
                </div>
            </div>
        </>
    )

}