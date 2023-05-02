import React, { useState, useEffect } from 'react';
import "../styles/Projects.css"
import ProjectsInfo from './ProjectsInfo';

function Projects() {
  
  return (
    <div id='projects'  className='whitesection'>

  <h2  className='titleprojects' >SOME OF MY PROJECTS</h2>

         <ProjectsInfo/>
    </div>
  );
}

export default Projects;
