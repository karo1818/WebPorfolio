import React,{useState} from "react";
import "../styles/TareaFormulario.css";
import {v4 as uuidv4} from "uuid";
function TareaFormulario(props){

    const[input,setInput]=useState("");

    const manejarCambio=e=>{
        setInput(e.target.value);
    }

    const manejarEnvio =e=>{
        e.preventDefault(); /*evita q se cargue la aplicacion cuando enviamos el form */
        
       
        const tareaNueva={
            id: uuidv4(), /*generar identificador unico*/
            texto:input,
            completada:false
       
        }
        props.onSubmit(tareaNueva); /*aqui se envia la tarea al enviar el form*/
    }

    return(
        <form className="tarea-formulario"
        onSubmit={manejarEnvio}>
            <input
            className="tarea-input"
            type="text"
            placeholder="Escriba una tarea"
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar Tarea</button>

        </form>
    );
}

export default TareaFormulario;