// /* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import  { useParams } from 'react-router-dom'
import { SFform, SFoormTitle, SBbutton, SDdiv, CajaError,
    ContenedorInfoVacante, ContenedorInfoDatos, ColumnaInfo, SpanInfo,
    ContenedorDescripcion, ContenedorPostulacion, ContenedorInfoBoton,
    CajaExito, P1} from "./VacanteDetalleStyle";
import { /* SLayout, */ SMain } from "../../components/Layout/styles";
import axios from "axios";
import InputText from "../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";





const INITIAL_STATE = {
    user_id: "",
    video:"",
    vacante_id:"",
};

export const VacanteDetalle = ({ children }) => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = React.useState(false);


    const [vacanteDetalle, setVacanteDetalle] = useState({})
    const [preguntas, setPreguntas] = useState({})
    const params = useParams();
    console.log(params, 'params')
    // const vacanteID = params;
    // console.log(vacanteID, 'VACANTEID')

    // const { vacante_id } = params
    // console.log(vacante_id)



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
        setVacanteDetalle(data.vacantes[0])
        setPreguntas(data.preguntas[0])
        console.log(data)

                
        } catch (error) {
            console.log(error?.response)   
        }
    }


    useEffect(() => {
        getInfoVacante(params.vacante_id); // eslint-disable-next-line
    }, []); 


    const { name, tipo_trabajo, estado, modalidad, area, sueldo, descripcion, requisitos } = vacanteDetalle
    const { pregunta1, pregunta2, pregunta3 } = preguntas





    const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("accesstoken");
    console.log(token);
    if(!token)
    return
    const config = {
        headers: {
        "Content-Type": "application/json", 
        Authorization: `Bearer ${token}` 
        }
    }
    try {
        const { data, status } = await axios.post(`https://gettalent-6.herokuapp.com/users/vacantes/${params.vacante_id}/`,{
        "user_id": Number(localStorage.getItem('id')),
        "vacante_id": params.vacante_id,
        "video":formData.video,
    },
        config
        );
    

        
    setLoading(false);
    
    if (status >= 200 && status < 300) {
        console.log("Respuesta PERFECTO:", data);
        setSuccess(true);
    } 
    } catch (error) {
        setError("Algo salio mal :c, vuelve a intentarlo");
        console.log(error?.response)
    } finally {
    setLoading(false);
    }
};


    const onChangeHandler = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };


    return (    
    <>
        <SMain>{children}</SMain>
        <SFform>
        <SFoormTitle> DETALLE VACANTE </SFoormTitle>
        <ContenedorInfoVacante>
            <ContenedorInfoDatos>
            <ColumnaInfo>
                <P1><SpanInfo>Nombre de la empresa: <br/></SpanInfo>{name}</P1>
                <P1><SpanInfo>Jornada: <br/></SpanInfo>{tipo_trabajo}</P1>
            </ColumnaInfo>

            <ColumnaInfo>
                <P1><SpanInfo>Ubicación: <br/></SpanInfo>{estado}</P1>
                <P1><SpanInfo>Modalidad: <br/></SpanInfo>{modalidad}</P1>
            </ColumnaInfo>
            
            
            <ColumnaInfo>
                <P1><SpanInfo>Area/Rol: <br/></SpanInfo>{area}</P1>
                <P1><SpanInfo>Sueldo: <br/></SpanInfo>${sueldo}</P1>
            </ColumnaInfo>

            </ContenedorInfoDatos>

                <P1><SpanInfo style={{paddingLeft: '10px'}}>Descripción de la vacante: </SpanInfo></P1>
            <ContenedorDescripcion>
                <P1>{descripcion}</P1>
                <P1><SpanInfo>Requisitos: </SpanInfo></P1>
                <P1>{requisitos}</P1>
            </ContenedorDescripcion>
            </ContenedorInfoVacante> 
        </SFform>


        <SFform onSubmit={onSubmitHandler}>
        <SFoormTitle> POSTULACIÓN VACANTE </SFoormTitle>
        <ContenedorInfoVacante>
            <ContenedorPostulacion>
            <P1> Para poder seguir con tu postulación, graba un video menor a 3 minutos, respondiendo las siguientes preguntas </P1>
            <div style={{fontWeight: 'bold'}}>
                <P1>{pregunta1}</P1> 
                <P1>{pregunta2}</P1> 
                <P1>{pregunta3}</P1> 
            </div>
            
            </ContenedorPostulacion>
            

            <>
            <h5 style={{paddingLeft: '10px'}}> Envia tu video </h5>
            <InputText
                id="video"
                type="url"
                name="video"
                placeholder="Ingresa una URL."
                value={formData.video}
                callback={(e) => { onChangeHandler(e);}}
                isRequired={true}
            />
            <div align="right">
                <font size="2"> Sube el video a alguna plataforma y compartenos tu enlace</font>
            </div>

            </>    
            {loading ? (
                <SpinnerSmall />
            ) : (
                <ContenedorInfoBoton>
                <SBbutton type="submit">POSTULAR</SBbutton>
                </ContenedorInfoBoton>
            )}
            {success &&
                <CajaExito>
                <SDdiv>Postulación Exitosa: Datos enviados correctamente.</SDdiv>
                </CajaExito>
            }
            {error &&  
                <CajaError>  
                    <SDdiv>Por favor, vuelva a intentarlo.</SDdiv>
                    <h5>Problema del Servidor: información no guardada.</h5>
            </CajaError>
                }

            </ContenedorInfoVacante> 
            </SFform>
            
    </>
    );
    };
