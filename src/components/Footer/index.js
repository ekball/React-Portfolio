import React from "react";

function Footer() {

    return(

        <div className="footer-section flex justify-evenly content-center bg-sky-700 p-2">

            <a href="mailto:ekylesball@gmail.com">ekylesball@gmail.com</a>

            <a href='https://github.com/ekball' className="footer-link hover:text-orange-400">GitHub</a>

            <a href='https://stackexchange.com/users/22776564/ekball' className="footer-link hover:text-orange-400">Stack Overflow</a>

            <a href='https://www.linkedin.com/in/kyles-ball' className="footer-link hover:text-orange-400">LinkedIn</a>
        
        </div>
    );
}

export default Footer;