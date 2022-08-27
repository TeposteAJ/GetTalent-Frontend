import React, {useState, useEffect} from 'react'
import axios from "axios";
import  {TarjetaVacanteEmpresa } from '../../components/TarjetaVacanteEmpresa/TarjetaVacanteEmpresa'
import { ContenedorVacantes } from './VacantesEmpresaStyle'


export const ListadoVacantes = () => {

    const [vacantes, setVacantes] = useState([]);


    useEffect(() => {
        const getVacantes = async () => {
        
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
    
    getVacantes();
    }, [])


    


    return (
        <>
            <h5>Vacantes Publicadas</h5>

        <ContenedorVacantes>


            {vacantes.length ? 
                vacantes.map( vacante =>(
                <TarjetaVacanteEmpresa
                key={vacante.vacante_id}
                vacante={vacante}
            />
            ))

            : <p>NO TIENES VACANTES PUBLICADAS</p>
        
        }


        </ContenedorVacantes>
        </>
    )
}

export default ListadoVacantes
