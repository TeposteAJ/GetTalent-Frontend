import React, {useState, useEffect} from 'react'
import axios from "axios";
import  {TarjetaVacanteEmpresa } from '../../components/TarjetaVacanteEmpresa/TarjetaVacanteEmpresa'
import { ContenedorVacantes, SFoormTitle, P1 } from './VacantesEmpresaStyle'


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
            const  {data} = await axios('https://gettalent-6.herokuapp.com/empresa/informacion/', config)
            setVacantes(data.data.Vacantes)
            console.log(data, 'DATA')
            console.log(data.data.Vacantes)
            
        } catch(error) {
            
			console.log('NO SE PUDO OBTENER LAS VACANTES PUBLICADAS', error?.response)
        }

        };
    
    getVacantes();
    }, [])


    


    return (
        <>
            <SFoormTitle>Vacantes Publicadas</SFoormTitle>

        <ContenedorVacantes>


            {vacantes.length ? 
                vacantes.map( vacante =>(
                <TarjetaVacanteEmpresa
                // key={vacante.vacante_id}
                vacante={vacante}
            />
            ))

            : <P1>NO TIENES VACANTES PUBLICADAS</P1>
        
        }


        </ContenedorVacantes>
        </>
    )
}

export default ListadoVacantes
