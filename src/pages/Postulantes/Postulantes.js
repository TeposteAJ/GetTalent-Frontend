// /* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import  { useParams } from 'react-router-dom';
import axios from "axios";
import { SFform,SFoormTitle, ContenedorPostulantes} from "./PostulantesStyle";
import { SLayout, SMain } from "../../components/Layout/styles";
import { TarjetaPostulante } from "../../components/TarjetaPostulante/TarjetaPostulante";




export const ListadoPostulantes = ({ children }) => {
    const [postulantes, setPostulantes] = useState([]);

    const params = useParams();
    console.log(params, 'params')


    
        const getListaPostulantes = async (vacante_id) => {
        
        try {
            const token = localStorage.getItem("accesstoken");
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${token}` 
                }
            }
            const  {data} = await axios(`https://gettalent-6.herokuapp.com/empresa/postulaciones/${vacante_id}/`, config)

            const onBuildSolicitanteObject = (solicitantes) => (
                solicitantes.map((solicitante, idx) => {
                    const videoData = data.videos[idx]
                    return {...solicitante, ...videoData}
                } )
            )

            setPostulantes(onBuildSolicitanteObject(data.Solicitantes))
            // console.log(postulantes)
            // console.log(data)
            // console.log(data.videos)

            
        } catch(error) {
			console.log('NO SE PUDO OBTENER LAS POSTULACIONES', error?.response)
        }

        };
    



    useEffect(() => {
        getListaPostulantes(params.vacante_id); // eslint-disable-next-line
    }, []); 



    

    return (    
    <SLayout>
        
        <SMain>{children}</SMain>
        <SFform>
        <SFoormTitle>APLICANTES</SFoormTitle>

        <ContenedorPostulantes>
            {postulantes.length ? 
                postulantes.map( postulante=>(
                <TarjetaPostulante
                key={postulante.index} 
                postulante={postulante}
                />
                ))
                : <p>NADIE SE HA POSTULADO A ESTA VACANTE</p>
            }
        </ContenedorPostulantes>
        </SFform>
    </SLayout>
    );
    };
    