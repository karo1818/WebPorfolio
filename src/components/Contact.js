import React, { useState, useEffect } from 'react';
import "../styles/Contact.css"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"


const instagramUrl = "https://www.instagram.com/karo.pdf/";
const linkedinUrl = "https://cr.linkedin.com/in/karolina-madrigal-morera-8514b1211";
const githubUrl = "https://github.com/karo1818";


function Contact() {
  
  return (
    <footer className='footer'>
        
        <a href={instagramUrl} target="_blank">
             <img className='icons' src={instagram} alt="Instagram"/>
        </a>
        
        <a href={linkedinUrl} target="_blank">
             <img className='icons' src={linkedin} alt="Linkedin"/>
        </a>

        <a href={githubUrl} target="_blank">
            <img className='icons' src={github} alt="Github"/>
        </a>


    </footer>
  );
}

export default Contact;
