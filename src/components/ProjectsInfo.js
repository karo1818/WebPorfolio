import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import "../styles/Projects.css"
import projectData from "../texts/data.json"
import prueba1 from "../images/prueba1.jpeg"
import prueba2 from "../images/prueba2.jpeg"

function ProjectsInfo() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setDataLoaded(true);
  }, []);

  
  $(document).ready(function() {
    let currentIndex = 0;
    const images = $('.projects-internos-img img');
    const maxIndex = images.length - 1;
    
    setInterval(function() {
      images.eq(currentIndex).fadeOut(500);
      currentIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
      images.eq(currentIndex).fadeIn(500);
    }, 3000);
  });
  

  return (
    <div>
       
        <div className='contenedor-projects'>
             
                 {dataLoaded && (
                      <div className='projects-internos'>  <h3>MEDICAL DATES SERVICES</h3>        
                      <textarea
                       className='infoprojects'
                       defaultValue={`${projectData.project}\n\nFunctionalities:\n${projectData.functionalities.join('\n')}`}
                         />

                    </div>
                        )}

                        <div  className='projects-internos-img'>
                        <img alt='prueba1' className='screens' src={prueba1} />
                        <img alt='prueba1' className='screens' src={prueba2} />
                        </div>
        </div>


        <div className='contenedor-projects'>
             
             {dataLoaded && (
                  <div className='projects-internos'>  <h3>MEDICAL DATES SERVICES</h3>        
                  <textarea
                   className='infoprojects'
                   defaultValue={`${projectData.project}\n\nFunctionalities:\n${projectData.functionalities.join('\n')}`}
                     />

                </div>
                    )}

                    <div  className='projects-internos-img'>
                    <img alt='prueba1' className='screens' src={prueba1} />
                    </div>
    </div>         
      
      
    </div>
    

    
  );
  
}


  

export default ProjectsInfo;
