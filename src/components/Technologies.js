import React from 'react';
import "../styles/Technologies.css"
import boostrap from "../images/Boostrap.webp"
import css from "../images/Css.webp"
import html from "../images/Html.webp"
import javascript from "../images/Javascript.webp"
import react from "../images/React.webp"
import jquery from '../images/jquery.webp'
import Json from "../images/Json.webp"
import api from "../images/api.png"

function Technologies() {
  return (
    <div className='principal-container'>
    <div className='tittle'><h1>THIS PROJECT WAS MADE WITH</h1></div>
     <div className='tareas-lista-principal'>
     <img alt='css' className='tools' src={css} />
     <img alt='html' className='tools' src={html} />
     <img alt='javascript' className='tools' src={javascript} />
     <img alt='react' className='tools' src={react} />
     <img alt='boostrap' className='tools' src={boostrap} />
     <img alt='jquery' className='tools' src={jquery} />
     <img alt='json' className='tools' src={Json} />
     <img alt='api' className='tools' src={api} />
     </div>

   </div>
  );
}

export default Technologies;