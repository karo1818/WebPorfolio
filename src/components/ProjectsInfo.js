import React, { useState, useEffect } from 'react';
import "../styles/Projects.css"
import projectData from "../texts/data.json"
import prueba1 from "../images/prueba1.jpeg"
import prueba2 from "../images/prueba2.jpeg"

function ProjectsInfo() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [prueba1, prueba2];

  useEffect(() => {
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);



  return (
          //------------------------PRIMER PROYECTO--------------------------------------
    <div>
      <div className='contenedor-projects'>
        {dataLoaded && (
          <div className='projects-internos'>
            <h3>MEDICAL DATES SERVICES</h3>
            <textarea
              className='infoprojects'
              defaultValue={`${projectData.project}}`}
            />
          </div>
        )}
        

        <div className='projects-internos-img'>
          {images.map((src, index) => (
            <img 
              key={index} 
              alt={`prueba${index + 1}`}
              className='screens'
              src={src}
              style={{ display: currentIndex === index ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>


    {/*------------------------------SEGUNDO PROYECTO--------------------------- */}
   
      <div className='contenedor-projects'> 
        
      <div className='projects-internos-img'>
          {images.map((src, index) => (
            <img 
              key={index} 
              alt={`prueba${index + 1}`}
              className='screens'
              src={src}
              style={{ display: currentIndex === index ? 'block' : 'none' }}
            />
          ))}
        </div>
        
        {dataLoaded && (
          <div className='projects-internos'>
            <h3>MEDICAL DATES SERVICES</h3>
            <textarea
              className='infoprojects'
              defaultValue={`${projectData.project}\n\nFunctionalities:\n${projectData.functionalities.join('\n')}`}
            />
          </div>
        )}

        
      </div>


{/*------------------------------TERCER PROYECTO--------------------------- */}

      <div className='contenedor-projects'>
        {dataLoaded && (
          <div className='projects-internos'>
            <h3>MEDICAL DATES SERVICES</h3>
            <textarea
              className='infoprojects'
              defaultValue={`${projectData.project}\n\nFunctionalities:\n${projectData.functionalities.join('\n')}`}
            />
          </div>
        )}

        <div className='projects-internos-img'>
          {images.map((src, index) => (
            <img 
              key={index} 
              alt={`prueba${index + 1}`}
              className='screens'
              src={src}
              style={{ display: currentIndex === index ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>



    </div>
  );
}

export default ProjectsInfo;
