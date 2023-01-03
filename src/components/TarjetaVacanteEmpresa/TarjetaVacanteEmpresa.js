import React from 'react'
import { Link } from 'react-router-dom'
import {ContenedorTarjeta, ContenedorColumnasTarjeta, ColumnaTarjeta, BotonTarjeta,  SpanInfo, ColumnaBoton} from "./TarjetaVacanteEmpresaStyle";

  export const TarjetaVacanteEmpresa = ({vacante}) => {

        const { name, estado, area, tipo_trabajo, modalidad, sueldo, vacante_id, descripcion, requisitos } = vacante

    return (
        <ContenedorTarjeta>
        <ContenedorColumnasTarjeta>
            <ColumnaTarjeta>
                <p><SpanInfo>Vacante: <br/> </SpanInfo>{name}</p>
                <p><SpanInfo>Descripción: <br/> </SpanInfo>{descripcion}</p>
                <p><SpanInfo>Requisitos: <br/> </SpanInfo>{requisitos}</p>
            </ColumnaTarjeta>
            
            <ColumnaTarjeta>
                <p><SpanInfo>Area: <br/></SpanInfo>{area}</p>
                <p><SpanInfo>Jornada: <br/></SpanInfo>{tipo_trabajo}</p>
                <p><SpanInfo>Modalidad: <br/></SpanInfo>{modalidad}</p>
            </ColumnaTarjeta>
            
            <ColumnaTarjeta >
                <p><SpanInfo>Ubicación: <br/></SpanInfo>{estado}</p>
                <p><SpanInfo>Sueldo: <br/></SpanInfo> ${sueldo}</p>
            </ColumnaTarjeta>
    


            <ColumnaBoton>
                <BotonTarjeta >
                        <Link to={`${vacante_id}`} >
                            Postulantes
                        </Link>
                    </BotonTarjeta>
            </ColumnaBoton>


        </ContenedorColumnasTarjeta>


        </ContenedorTarjeta>
    )
    }

