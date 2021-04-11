import React, {useState} from 'react';
import Style2 from '../../Style/forBodyStyle.module.css';
import Style from  '../../Style/scopeStyle.module.css';
import Style3 from '../../Style/lineHor.module.css';
import ImgAlgo from '../../Images/ScopeImages/algorithm.svg';
import ImgWeb from '../../Images/ScopeImages/web-design.svg';
import ImgScreen from  '../../Images/ScopeImages/laptop-screen.svg';
import Modal from "./Modal";
import ContactUs from "../layouts/contactForm";



const Body = () =>{
    const [isOpen, setIsOpen]= useState(false)
    return(

        <div className={Style2.bgcolor}>
            <hr className={Style3.lineHor}/>
            <div className={Style2.about_section}>
                <div className={Style2.inner_container}>
                    <h1>About us</h1>
                    <p className={Style2.text}>Despre noi</p>

                    <div className={Style2.skills}>
                        <span>Web design</span>
                        <span>Algorithms</span>
                        <span>Blockchain</span>
                    </div>
                </div>
            </div>
            <div className={Style.wrapper}>
                <hr className={Style3.lineHor}/>
                <h1>Our Scope</h1>
                <div className={Style.scope}>
                    <div className={Style.scope_member}>
                        <div className={Style.scope_img}>
                            <img src={ImgAlgo}/>
                        </div>
                        <h3>Digitalizare</h3>
                        <p className={Style.role}></p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className={Style.scope_member}>
                        <div className={Style.scope_img}>
                            <img src={ImgScreen}/>
                        </div>
                        <h3>Digitalizare</h3>
                        <p className={Style.role}></p>
                        <p>Lorem Ipsum</p>

                    </div>
                    <div className={Style.scope_member}>
                        <div className={Style.scope_img}>
                            <img src={ImgWeb}/>
                        </div>
                        <h3>Digitalizare</h3>
                        <p className={Style.role}></p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>

            </div>


            <button onClick={()=>setIsOpen(true)}>Contact us</button>
            <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
            </Modal>

        </div>
    )
}


export default Body;