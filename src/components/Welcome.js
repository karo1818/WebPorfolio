import React from 'react';
import "../styles/Welcome.css"
import profile from "../images/profile.webp";
function Welcome() {
  return (
    <div className='greeting-div'>



        <div className='left'>

             <h1 className='greeting'>Hello!</h1>
             <h1 className='greeting'>I am Karolina</h1>
                <h1 className='greeting'>Web developer</h1>
                <h2 className='information'>Frond End Developer / React</h2>

        </div>

        <div className='right'>

           <img className='profile'
             src={profile} />

        </div>
           

    </div>
  );
}

export default Welcome;