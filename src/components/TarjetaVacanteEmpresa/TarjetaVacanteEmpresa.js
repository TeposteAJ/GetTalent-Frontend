import React from 'react'
import {ContenedorTarjeta, ContenedorColumnasTarjeta, ColumnaTarjeta, BotonTarjeta} from "./TarjetaVacanteEmpresaStyle";

  export const TarjetaVacanteEmpresa = ({vacante}) => {

        const { name, localidad, area, tipo_trabajo, modalidad, sueldo } = vacante

    return (
        <ContenedorTarjeta>
        <ContenedorColumnasTarjeta>
            <ColumnaTarjeta>
                <p>{name}</p>
                <p>{area}</p>
            </ColumnaTarjeta>
            
            <ColumnaTarjeta>
                <p>{tipo_trabajo}</p>
                <p>{modalidad}</p>
            </ColumnaTarjeta>
            
            <ColumnaTarjeta >
                <p>{localidad}</p>
                <p>${sueldo}</p>
                {/* <p>{rol}</p> */}
            </ColumnaTarjeta>


            <div>
                <BotonTarjeta>Postulaciones</BotonTarjeta>
            </div>

        </ContenedorColumnasTarjeta>


        </ContenedorTarjeta>
    )
    }

