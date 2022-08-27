import React from "react";
import {SLlabel, SLSelect} from "./ListasStyle";
import { useState } from "react";



const useListas = (etiqueta, opciones) => {

    const [state, setState] = useState('')

    const SelectLista = () => (
        <>  
        <SLlabel>
        <label>{etiqueta}</label>
            <SLSelect
              value = {state}
              onChange={e => setState (e.target.value)}
            > 
                <option value="">Seleccione</option>
                {opciones.map( opcion => (
                    <option
                       key = {opcion.id}
                       value = {opcion.id}
                    >{opcion.nombre}</option>
                ))}
                SetValue(value);
                console.log(value);
            </SLSelect>
        </SLlabel>
            
        </>
    )

    return [state, SelectLista]

}

export default useListas