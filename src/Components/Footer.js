import React from 'react';
import Style from '../Style/footerStyle.module.css'

function Footer(){
    function openLoginForm(){
        document.body.classList.add("showLoginForm");
    }
    function closeLoginForm(){
        document.body.classList.remove("showLoginForm");
    }
    return(
        <div>
            <hr className={Style.lineHor}/>
            <footer className={Style.footer}>

                <div className={Style.footer_left}>
                    <img src={""} alt={"logo"}/>
                    <p>Lorem ipsum</p>
                    <div className={Style.socials}>
                        <a href={"#"}><i className={Style.fa_facebook}></i> </a>
                        <a href={"#"}><i className={Style.fa_twiter}></i> </a>
                        <a href={"#"}><i className={Style.fa_instagram}></i> </a>
                    </div>
                    <h3 className={Style.h3}>sdas</h3>


                </div>
              <div className={Style.footer_bottom}>
                  <p>All Right  by &copy;Bitwize 2021</p>
              </div>
            </footer>
        </div>


    )
}

export default Footer;