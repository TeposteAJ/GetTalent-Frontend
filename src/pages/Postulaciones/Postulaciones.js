// /* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SFform,SFoormTitle, ContenedorPostulaciones} from "./PostulacionesStyle";
import { SLayout, SMain } from "../../components/Layout/styles";
import { TarjetaPostulacion } from "../../components/TarjetaPostulacion/TarjetaPostulacion";




export const ListadoPostulaciones = ({ children }) => {
    const [postulaciones, setPostulaciones] = useState([]);


    useEffect(() => {
        const getListaPostulaciones = async () => {
        
        try {
            const token = localStorage.getItem("accesstoken");
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${token}` 
                }
            }
            const  { data} = await axios('https://gettalent-6.herokuapp.com/users/postulaciones/', config)
            setPostulaciones(data.vacantes)
            console.log(data.video)
            console.log(data)

    
        

            
        } catch(error) {
			console.log('NO SE PUDO OBTENER LAS POSTULACIONES', error?.response)
        }

        };
    
    getListaPostulaciones();
    }, [])




    

    return (    
    <SLayout>
        
        <SMain>{children}</SMain>

        <SFform>
        <SFoormTitle>MIS POSTULACIONES</SFoormTitle>

        <ContenedorPostulaciones>

            {postulaciones.length ? 
                postulaciones.map( postulacion =>(
                <TarjetaPostulacion
                key={postulacion.index}
                postulacion={postulacion}
                />
                ))
                : <p>ACTUALMENTE NO TE HAS POSTULADO A NINGUNA VACANTE</p>
            }

        </ContenedorPostulaciones>
        </SFform>

    </SLayout>
    );
    };
    