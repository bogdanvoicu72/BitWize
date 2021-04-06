import React from 'react';
import Style from '../Style/bodyStyle.module.css';

function Body(){
    return(
        <div className={Style.bgcolor}>
            <hr className={Style.lineHor}/>
            <div className={Style.about_section}>
                <div className={Style.inner_container}>
                    <h1>About us</h1>
                    <p className={Style.text}>Despre noi</p>

                    <div className={Style.skills}>
                        <span>Web design</span>
                        <span>Algorithms</span>
                        <span>Blockchain</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;