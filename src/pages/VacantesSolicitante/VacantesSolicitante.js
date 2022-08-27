import React, {useState, useEffect} from 'react'
import axios from "axios";
import  {TarjetaVacanteSolicitante } from '../../components/TarjetaVacanteSolicitante/TarjetaVacanteSolicitante'
import { ContenedorVacantes } from './VacantesSolicitanteStyle'


export const ListadoVacantesSolicitante = () => {

    const [vacantes, setVacantes] = useState([]);


    useEffect(() => {
        const getListaVacantes = async () => {
        
        try {
            const token = localStorage.getItem("accesstoken");
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${token}` 
                }
            }
            const  {data} = await axios('https://gettalent-6.herokuapp.com/vacantes/', config)
            setVacantes(data.vacantes)
            console.log(data)
        

            
        } catch(error) {
			console.log('NO SE PUDO OBTENER LAS VACANTES', error?.response)
        }

        };
    
    getListaVacantes();
    }, [])




    return (
        <>
            <h5>Vacantes Disponibles</h5>

        <ContenedorVacantes>

            {vacantes.length ? 
                vacantes.map( vacante =>(
                <TarjetaVacanteSolicitante
                key={vacante.vacante_id}
                vacante={vacante}
                />
                ))
                
                : <p>ACTUALMENTE NO HAY VACANTES DISPONIBLES</p>
                
            }

        </ContenedorVacantes>
        </>
    )
}















