import React from 'react'
// import { Link } from 'react-router-dom'
import {ContenedorPostulacionCard, Columnas, Columna, /* ContenedorBoton, BotonVacante, */ Span} from "./TarjetaPostulacionStyle";

export const TarjetaPostulacion = ({postulacion}) => {

    const { name, area, descripcion, estado, experiencia, sueldo, tipo_trabajo, modalidad, requisitos } = postulacion


    return (
        <ContenedorPostulacionCard>
        <Columnas>
            <Columna>
                <p><Span>Vacante: <br/></Span> {name}</p>
                <p><Span>Descripción: <br/></Span>{descripcion}</p>
                <p><Span>Requisitos: <br/></Span>{requisitos}</p>
            </Columna>
            
            <Columna>
                <p><Span>Área: <br/></Span>{area}</p>
                <p><Span>Experiencia necesaria: <br/></Span>{experiencia}</p>
                <p><Span>Estado: <br/></Span>{estado}</p>
            </Columna>

            <Columna>
                <p><Span>Modalidad: <br/></Span>{modalidad}</p>
                <p><Span>Jornada: <br/></Span>{tipo_trabajo}</p>
                <p><Span>Sueldo: <br/></Span> {sueldo}</p>
            </Columna>

        </Columnas>

            {/* <ContenedorBoton>
                <BotonVacante > Ver Detalle
                    <Link to={`${vacante_id}`} style={{textDecorationColor: '#fff', textDecoration: 'none'}}>
                        Ver Vacante
                    </Link>
                    </BotonVacante>
            </ContenedorBoton> */}
        

        </ContenedorPostulacionCard>
    )
}