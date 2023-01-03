import React from "react";
import { useState } from "react";
import axios from "axios";
import { SLayout, SMain,ContenedorGral } from "../../components/Layout/styles";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";
import useListas from "../../components/Atoms/Listas/Listas";

import {SFform, SFoormTitle, SBbutton, Ha,
  GridLayout, CajaError, SDdiv, CajaExito} from "./InteresesStyle";

/* Constantes */
const urlApi = "https://gettalent-6.herokuapp.com/users/interes/";

const tipotrabajo_list = [
    { id: "Tiempo Completo", nombre: "Tiempo Completo" },
    { id: "Medio Tiempo", nombre: "Medio Tiempo" },
    { id: "Proyecto", nombre:"Proyecto"},
    { id: "Sin especificar", nombre:"Sin especificar"}
  ];

const modalidad_list = [
    { id: "Presencial", nombre: 'Presencial'},
    { id: "Virtual", nombre: 'Virtual' },
    { id: "Hibrido", nombre:'Hibrido'},
    { id: "Sin especificar", nombre:"Sin especificar"}
  ];

const areas_list = [
    {id: "Marketing", nombre: "Marketing"},
    {id: "Ventas", nombre: "Ventas"},
    {id: "Humanidades", nombre: "Humanidades"},
    {id: "Administración", nombre: "Administración"},
    {id: "Industria", nombre: "Industria"},
    {id: "Analisis de Datos", nombre: "Analista de Datos"},
    {id: "Tecnología", nombre: "Tecnología"},
    {id: "Desarrollo de software", nombre:"Desarrollo de Software"},
    {id: "Ciencias Exactas", nombre: "Ciencias Exactas"}
  ];

  const experiencia_list = [
    {id: "Becario", nombre: "Becario"},
    {id: "Primer Empleo", nombre: "Primer Empleo"},
    {id: "Experiencia Media", nombre: "Experiencia Media"},
    {id: "Mucha experiencia", nombre: "Mucha Experiencia"},
    {id: "Cargos ejecutivos", nombre: "Cargos Ejecutivos"}
  ];

export const Interes = ({ children }) => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = React.useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    const token = localStorage.getItem("accesstoken");
    if(!token)
    return
    const config = {
      headers: {
        "Content-Type": "application/json", 
          Authorization: `Bearer ${token}` 
      }
    }
    
    try {
      const { data, status } = await axios.post(urlApi,{
          user_id: Number(localStorage.getItem('id')),
          modalidad: modalidad_seleccion,
          tipo_trabajo: tipotrabajo_seleccion,
          area_interes: areas_seleccion,
          experiencia_interes: experiencia_seleccion,  
        },
        config
        );
      
        
      setLoading(false);
      
      if (status >= 200 && status < 300) {
        console.log("Respuesta PERFECTO:", data);
        setSuccess(true);
        // const error = { message: data, status: response.status };
        // return Promise.reject(error);
      } 
    } catch (error) {
      setError("Algo salio mal :c, vuelve a intentarlo");
    
      console.log(error)
      console.error(error);
      console.log(error?.response)
    } finally {
      setLoading(false);
    }
  };


  

    const [tipotrabajo_seleccion, SelectTipoTrabajo] = useListas('Tipo de Trabajo:*', tipotrabajo_list)
    SelectTipoTrabajo()

    const [modalidad_seleccion, SelectModalidad] = useListas('Modalidad:*', modalidad_list)
    SelectModalidad()

    const [areas_seleccion, SelectArea] = useListas('Area:*', areas_list)
    SelectArea()

    const [experiencia_seleccion, SelectExperiencia] = useListas('Nivel de Experiencia:*', experiencia_list)
    SelectExperiencia()

    return (
            
      <SLayout>
          
          <SMain>{children}</SMain>
          <SFform onSubmit={onSubmitHandler}>
            <ContenedorGral>
              <SFoormTitle> INTERESES LABORALES </SFoormTitle>
              <GridLayout>

                <SelectArea/>
                <SelectExperiencia/>
                <SelectModalidad />
                <SelectTipoTrabajo/>

              </GridLayout>
              {loading ? (
                    <SpinnerSmall />
                ) : (
                    <SBbutton type="submit">Guardar</SBbutton>
                )}
                {success &&
                 <CajaExito>
                  <SDdiv>Registro Exitoso: datos guardados correctamente.</SDdiv>
                </CajaExito>
                   }
                {error &&  
                    <CajaError>  
                        <SDdiv>Por favor, vuelva a intentarlo.</SDdiv>
                        <h5>Problema del Servidor: información no guardada.</h5>
                    </CajaError>
                    }
                 <Ha size="2.5"> *Campos obligatorios.</Ha>
              
              </ContenedorGral>
            </SFform>
             
      </SLayout>
      );
    };
    export default Interes;

//NOTA: de parte de Front ,seria bueno que cambiara el valor vacio a un null, en el email
// y que pudiera decirme que no acepta edades mayores a 90 años o algo asi, porque me da 400 
//pero no dice que es lo que sucede exactamente