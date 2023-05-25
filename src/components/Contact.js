import React from 'react';
import "../styles/Contact.css"
import fondo from "../videos/fondo.mp4"

function Contact() {
  return (
    <div id="video-container">
      <video id="video-background" autoPlay loop muted>
        <source src={fondo} type="video/mp4" />
        
      </video>
      <div id="video-overlay"></div>
      <div id="video-content">

        <div className='divcontact'>

          <h2>Send me a message</h2>
       
        <label>Message: <input className='textcontact' type="text" placeholder="" /></label>
        <label>Message: <input className='textcontact' type="text" placeholder="" /></label>
        <label>Message: <input className='textcontact' type="text" placeholder="" /></label>
        <label>Message: <input className='textcontact' type="text" placeholder="" /></label>


        </div>


      </div>
    </div>
  );
}

export default Contact;
