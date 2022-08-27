import { useEffect, useState } from 'react'
import  { useParams } from 'react-router-dom'
import axios from 'axios';
import { ContenedorInfoVacante, ContenedorInfoDatos, ColumnaInfo, SpanInfo, ContenedorDescripcion, ContenedorInfoBoton, BotonInfoVacante} from './VacanteDetalleStyle'

export const VacanteDetalle = ( ) => {  // eslint-disable-next-line
    const [vacante, setVacante] = useState({})

    const params = useParams();
    console.log(params)

    const getInfoVacante = async (vacante_id) => {
        try {

        const token = localStorage.getItem("accesstoken");
        if(!token) return

        const config = {
            headers: {
                "Content-Type": "application/json", 
                Authorization: `Bearer ${token}` 
            }
        }

        const  {data} = await axios(`https://gettalent-6.herokuapp.com/vacantes/${vacante_id}/`, config)
        setVacante(data.vacantes[0])
        console.log('INFO-VACANTE', data)
            
                
            
        } catch (error) {
            console.log(error)
            console.log(error?.response)
            
        }
    }
    


    useEffect(() => {
        getInfoVacante(params.vacante_id); // eslint-disable-next-line
    }, []); 


    const { name, estado, area, tipo_trabajo, modalidad, sueldo, descripcion, requisitos} = vacante



    return (

        <ContenedorInfoVacante>
            <h3> Detalle Vacante </h3>
            <ContenedorInfoDatos>
            <ColumnaInfo>
                <p><SpanInfo>Nombre de la empresa: </SpanInfo> 
                {name}</p>
                <p><SpanInfo>Jornada: </SpanInfo> 
                {tipo_trabajo}</p>
            </ColumnaInfo>

            <ColumnaInfo>
                <p><SpanInfo>Ubicación: </SpanInfo>
                {estado}</p>
                <p><SpanInfo>Modalidad: </SpanInfo>
                {modalidad}
                </p>
            </ColumnaInfo>
            
            
            <ColumnaInfo>
                <p><SpanInfo>Area/Rol : </SpanInfo>
                {area}</p>
                <p><SpanInfo>Sueldo: </SpanInfo>
                ${sueldo}</p>
            </ColumnaInfo>

            </ContenedorInfoDatos>

                <p><SpanInfo>Descripción de la vacante: </SpanInfo></p>
            <ContenedorDescripcion>
                <p>{descripcion}</p>

                <p>Requisitos: </p>
                <p>{requisitos}</p>
            </ContenedorDescripcion>

            <ContenedorInfoBoton>
                <BotonInfoVacante>POSTULAR</BotonInfoVacante>
            </ContenedorInfoBoton>


        </ContenedorInfoVacante>

    )
}


