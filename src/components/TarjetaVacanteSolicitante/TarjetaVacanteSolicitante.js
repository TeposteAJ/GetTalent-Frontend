import React from 'react'
import { Link } from 'react-router-dom'
import {TarjetaVacante, Columnas, ContenedorBoton, BotonVacante, Span, /* LinkBoton */} from "./TarjetaVacanteSolicitanteStyle";

export const TarjetaVacanteSolicitante = ({vacante}) => {

    const { name, estado, area, tipo_trabajo, modalidad, sueldo,  vacante_id } = vacante

    


    return (
    <TarjetaVacante>
        <Columnas>
            <div>
                <p><Span>Vacante: <br/></Span> {name}</p>
                <p><Span>Tipo: <br/></Span>{tipo_trabajo}</p>
            </div>
            
            <div>
                <p><Span>Area: <br/></Span> {area}</p>
                <p><Span>Modalidad: <br/></Span>{modalidad}</p>
            </div>

            <div>
                <p><Span>Ubicación: <br/></Span>{estado}</p>
                <p><Span>Sueldo: <br/></Span>${sueldo}</p>
            </div>

            <ContenedorBoton>
                <BotonVacante >
                        <Link to={`${vacante_id}`} >
                            Ver Vacante 
                        </Link>
                </BotonVacante>
            </ContenedorBoton>
        </Columnas>
        </TarjetaVacante>
    )
    }

