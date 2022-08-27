import React from 'react'
import { Link } from 'react-router-dom'
import {TarjetaVacante, Columnas, Columna, ContenedorBoton, BotonVacante, Span} from "./TarjetaVacanteSolicitanteStyle";

export const TarjetaVacanteSolicitante = ({vacante}) => {

        const { name, estado, area, tipo_trabajo, modalidad, sueldo, /* descripcion, requisitos */ vacante_id } = vacante

    


    return (
        <TarjetaVacante>
        <Columnas>
            <Columna>
                <p><Span>Vacante: </Span> {name}</p>
                <p><Span>Tipo: </Span>{tipo_trabajo}</p>
                <p><Span>Modalidad: </Span>{modalidad}</p>
                {/* <p><Span>Descripción: </Span>   {descripcion}</p>
                <p><Span>Requisitos: </Span>  {requisitos}</p> */}

            </Columna>
            
        
            
            <Columna>
                <p><Span>Area: </Span> {area}</p>
                <p><Span>Ubicación: </Span>{estado}</p>
                <p><Span>Sueldo: </Span>${sueldo}</p>
            </Columna>



        </Columnas>

            <ContenedorBoton>
                <BotonVacante>
                    <Link to={`${vacante_id}`}>
                        Ver Vacante
                    </Link>
                    </BotonVacante>
            </ContenedorBoton>
        

        </TarjetaVacante>
    )
    }

