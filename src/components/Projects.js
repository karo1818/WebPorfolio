import React, { useState, useEffect } from 'react';
import "../styles/Projects.css"
import ProjectsInfo from './ProjectsInfo';

function Projects() {
  
  return (
    <div className='whitesection'>

         <h2>Some of my projects</h2>

         <ProjectsInfo/>
    </div>
  );
}

export default Projects;
