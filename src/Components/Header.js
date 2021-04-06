import React from 'react';
import image from '../Images/bg.jpg';
import Style from '../Style/headerStyle.module.css'

function Hedear (){
    return(
        <div>
            <header className={Style.header}>
                        <a>
                            <img className={Style.img} src={image}/>
                        </a>
            </header>
        </div>
    )
}

export default Hedear;