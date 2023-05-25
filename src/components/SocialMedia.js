import React, { useState, useEffect } from 'react';
import "../styles/SocialMedia.css"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"


const instagramUrl = "https://www.instagram.com/karo.pdf/";
const linkedinUrl = "https://cr.linkedin.com/in/karolina-madrigal-morera-8514b1211";
const githubUrl = "https://github.com/karo1818";


function Contact() {
  
  return (
    <footer className='footer' id='social'>
        <div className='footerupdates'>
        <p className='lastupdate'>last update: 21/05/2023</p>
        </div>
        
        <div className='footericons'><a href={instagramUrl} target="_blank">
             <img className='icons' src={instagram} alt="Instagram"/>
        </a>
        
        <a href={linkedinUrl} target="_blank">
             <img className='icons' src={linkedin} alt="Linkedin"/>
        </a>

        <a href={githubUrl} target="_blank">
            <img className='icons' src={github} alt="Github"/>
        </a>
  </div>
        
      

    </footer>
  );
}

export default Contact;
