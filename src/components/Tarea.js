import React from "react";
import "../styles/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id,texto, completada,completarTarea, eliminarTarea}){
    return(
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto"
            onClick={()=>completarTarea(id)}>
                {texto}
            </div>

            <div className="tarea-contenedor-iconos"
            onClick={()=>eliminarTarea(id)}>
 {/* Para instalar iconos se usa: npm install react-icons --save */}
            <AiOutlineCloseCircle className="tarea-icono"/>
            </div>

        </div>
    );
}

export default Tarea;