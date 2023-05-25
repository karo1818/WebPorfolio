import React, { useState, useEffect } from 'react';
import "../styles/Projects.css"
import projectMedical from "../texts/Medical.json"
import projectMovies from "../texts/Movies.json"
import prueba2 from "../images/prueba2.jpeg"
import Slider from "./Slider";

function ProjectsInfo() {


 const images = [prueba2];
  


  


  const [dataLoaded, setDataLoaded] = useState(false);
 

  useEffect(() => {
    setDataLoaded(true);
  }, []);




  return (
          //------------------------PRIMER PROYECTO--------------------------------------
    <div>
      <div className='contenedor-projects'>
        {dataLoaded && (
          <div className='projects-internos'>
            <h3 className='tittleprojects'>MEDICAL DATES SERVICES</h3>
            <p className='infoprojects'>
              {`${projectMedical.project}`}
            </p>

            
          </div>
        )}
        

        <div className='projects-internos-img'>
          
       <Slider images={images} />
        
        </div>
      </div>


     {/*------------------------------SEGUNDO PROYECTO--------------------------- */}
   
     <div className='contenedor-projects'>
        {dataLoaded && (
          <div className='projects-internos'>
            <h3 className='tittleprojects'>MOVIE TICKETS PURCHASE</h3>
            <p className='infoprojects'>
              {`${projectMovies.project}`}
            </p>
          </div>
        )}
        

        <div className='projects-internos-img'>
          
        <Slider images={images} />
        
        </div>
      </div>
        
    </div>
  );
}

export default ProjectsInfo;
