import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Style from "../../Style/socialIcons.module.css";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

function SocialFollow(){
    return(
        <div>
            <a href={"#"} className={Style.facebook}>
                <FontAwesomeIcon icon={faFacebook} size={"2x"}/> </a>
            <a href={"#"} className={Style.instagram}>
                <FontAwesomeIcon icon={faInstagram} size={"2x"}/> </a>
            <a href={"#"} className={Style.twitter}>
                <FontAwesomeIcon icon={faTwitter} size={"2x"}/> </a>
        </div>
    )
}

export default SocialFollow;