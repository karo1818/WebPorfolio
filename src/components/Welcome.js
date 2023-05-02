import React from 'react';
import "../styles/Welcome.css"
import profile from "../images/profile.webp";
function Welcome() {
  return (
    <div id='home' className='greeting-div'>



        <div  className='left'>

             <h1 className='greeting'>Hello!</h1>
             <h1 className='greeting'>I am Karolina</h1>
                <h1 className='greeting'>Web developer</h1>
                <h2 className='information'>Front End Developer / React</h2>

        </div>

        <div className='right'>

           <img alt='profilepciture' className='profile'
             src={profile} />

        </div>
           

    </div>
  );
}

export default Welcome;