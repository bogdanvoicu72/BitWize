import React from 'react';
import image from '../Images/bg.jpg';
import Style from '../Style/headerStyle.module.css'

function Hedear (){
    return(
        <div className={Style.bgcolor}>
            <header>

            <div className={Style.about_section}>

                <div className={Style.inner_container}>
                    <h1>BitWize</h1>
                    <p className={Style.text}>Development</p>
                </div>
            </div>
            </header>
        </div>

    )
}

export default Hedear;