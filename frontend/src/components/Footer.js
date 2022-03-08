import React from "react";
import { animateScroll as scroll } from "react-scroll"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export default function Footer(){

 
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
                    href="https://wa.me/393457634584"
                    target='_blank'
                    rel="noreferrer"
                    >
                    <WhatsAppIcon/>
                    </a>
                    <a
                    href="https://github.com/silc22"
                    target='_blank'
                    rel="noreferrer"
                    >
                    <GitHubIcon/>
                    </a>
                </div>
                <div className="footer__text">
                    <p>
                        Developed by <i>Sil Cerquatti</i> with hope
                    </p>
                </div>
                <div className="button__top">
                    <ArrowCircleUpIcon onClick={()=>scroll.scrollToTop()}/>
                </div>
            </div>
        </>
    )

}