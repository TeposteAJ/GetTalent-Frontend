import React from 'react'
import {ContenedorTarjeta, ContenedorColumnasTarjeta, ColumnaTarjeta,  SpanInfo} from "./TarjetaPostulanteStyle";

export const TarjetaPostulante = ({postulante}) => {

    const { name, middle_name, paternal_lastname, maternal_lastname, age, gender, date_birth, additional_mail, marital_status, video} = postulante


    return (
        <>
        {postulante.name ? 
        <ContenedorTarjeta>
            <ContenedorColumnasTarjeta>
                <ColumnaTarjeta>
                    <p><SpanInfo>Nombre del Aplicante: <br/> </SpanInfo>{name} {middle_name} {paternal_lastname} {maternal_lastname}</p>
                    <p><SpanInfo>Email: <br/></SpanInfo>{additional_mail}</p>
                    <p><SpanInfo>Video: <br/></SpanInfo>{video}</p>
                </ColumnaTarjeta>
                
                <ColumnaTarjeta>
                    <p><SpanInfo>Género: <br/></SpanInfo>{gender}</p>
                    <p><SpanInfo>Estado Civil: <br/></SpanInfo>{marital_status}</p>
                </ColumnaTarjeta>
                
                <ColumnaTarjeta >
                    <p><SpanInfo>Edad: <br/></SpanInfo>{age}</p>
                    <p><SpanInfo>Fecha Nacimiento: <br/></SpanInfo> {date_birth}</p>
            
                </ColumnaTarjeta>

            </ContenedorColumnasTarjeta>
        </ContenedorTarjeta>
            : <p>NADIE SE HA POSTULADO A ESTA VACANTE</p>}
        </>


    )
        }