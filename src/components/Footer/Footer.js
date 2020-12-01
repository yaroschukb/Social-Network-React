import React from 'react';
import style from './Footer.module.css';
import About from './About';


function Footer(props) {
    return (
    <div className={style.content}>
        <div сlassName={style.contact}> 
            <div>&copy; { new Date().getFullYear()} ReactStydyProject |</div> <About className={style.modalWindow}
                                                    listLib={style.listLib}
                                                     /> 
        </div>
    </div>     
    )
}

export default Footer;