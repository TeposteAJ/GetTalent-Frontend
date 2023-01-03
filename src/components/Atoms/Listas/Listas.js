import React, { useState } from "react";
import {SLlabel, SLSelect} from "./ListasStyle";


const useSelectListas = (etiqueta, opciones) => {

    const [state, setState] = useState('')

    const SelectLista = () => (
        <>  
        <SLlabel>
        <label>{etiqueta}</label>
            <SLSelect
            value = {state}
            onChange={e => setState(e.target.value)}
            > 
                <option value="">Seleccione</option>
                {opciones.map( opcion => (
                    <option
                        key = {opcion.id}
                        value = {opcion.id}
                        >{opcion.nombre}
                    </option>
                ))}
                setValue(value);
                console.log(value);
            </SLSelect>
        </SLlabel>
            
        </>
    )

    return [state, SelectLista]

}

export default useSelectListas