import React from 'react';
import Style from '../Style/scopeStyle.module.css';

function Scope(){
    return(
        <div className={Style.wrapper}>
            <hr className={Style.lineHor}/>
            <h1>Our Scope</h1>
            <div className={Style.scope}>
                <div className={Style.scope_member}>
                        <div className={Style.scope_img}>
                            <img src={""}/>
                        </div>
                        <h3>Digitalizare</h3>
                        <p className={Style.role}></p>
                        <p>Lorem Ipsum</p>
                </div>
                <div className={Style.scope_member}>
                    <div className={Style.scope_img}>
                        <img src={""}/>
                    </div>
                    <h3>Digitalizare</h3>
                    <p className={Style.role}></p>
                    <p>Lorem Ipsum</p>
                </div>
                <div className={Style.scope_member}>
                    <div className={Style.scope_img}>
                        <img src={""}/>
                    </div>
                    <h3>Digitalizare</h3>
                    <p className={Style.role}></p>
                    <p>Lorem Ipsum</p>
                </div>
            </div>

        </div>
    )
}

export default Scope;