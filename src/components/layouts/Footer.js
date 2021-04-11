import React from 'react';
import Styled from 'styled-components';
import StyleLine from '../../Style/lineHor.module.css'
import Style from '../../Style/forFooterStyle.module.css';
import SocialFollow from "./SocialFollow";
import ContactUs from "./contactForm";

const Footer = () =>{
    return(
        <FooterContainer>
            <hr className={StyleLine.lineHor}/>
            <h4>Social media links</h4>
            <SocialFollow/>
            <ContactUs/>
            <span className={Style.span}>
                &copy;{new Date().getFullYear()} All Rights Reserved. Bitwize Development.
            </span>

        </FooterContainer>
    )
}


export default Footer;


//FOOTER CONTAINER

const FooterContainer =  Styled.div`
    background: #f9f5f2;
    height: 4em;
    position: relative;
    left:0;
    bottom: 0;
    width: 100%;
`;