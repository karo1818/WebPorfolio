import React, {useState} from "react"
import "../styles/ListaDeTareas.css"
import TareaFormulario from "./TareaFormulario"
import Tarea from "./Tarea"

function ListaDeTareas(){

    const [tareas, setTareas]=useState([]); /*estado inicial */
    
    const agregarTarea= tarea=>{
        console.log(tarea);
        if(tarea.texto.trim()){
            tarea.texto=tarea.texto.trim();
            const tareasActualizadas=[tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea=id=>{
        const tareasActualizadas=tareas.filter(tarea=>tarea.id!==id);
        setTareas(tareasActualizadas);
    }

    const completarTarea=id=>{
        const tareasActualizadas=tareas.map(tarea=>{
            if(tarea.id===id){
                tarea.completada=!tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return(
/*Si no queremos escribir un nuevo div innecesario podemos usar fracmentos */
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea)=>
                        <Tarea
                            key={tarea.id} /*identificar el elemento en la lista para q react sepa el orden y no los cambie al actualizarlos asi lo identifica en la lista*/
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }

            </div>
        
        </>
    );
}

export default ListaDeTareas;