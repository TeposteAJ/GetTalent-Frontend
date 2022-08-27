// /* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { SFform, SFoormTitle, SBbutton, GridLayout, 
        SSLayout, CajaError,CajaExito, SDdiv} from "./InfoAcademicaStyle";
//import Sidebar from "../../components/Sidebar/SidebarSolicitante";
import { SLayout, SMain } from "../../components/Layout/styles";
import InputText from "../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";
import useListas from "../../components/Atoms/Listas/Listas";

/* Constantes */
const urlApi = "https://gettalent-6.herokuapp.com/users/infoacademica/";

const INITIAL_STATE = {
  user_id:"",
  name:"",
  institucion:"",
  fecha_inicio:"",
  fecha_fin:"",
  estatus_academico:"",
  nivel_escolar:"",
};

const nivel_academico = [
  { id: "Doctorado", nombre:"Doctorado"},
  { id: "Maestria", nombre:"Maestría"},
  { id: "Universidad", nombre: "Universidad" },
  { id: "Carrera tecnica", nombre: "Carrera Técnica" },
  { id: "Diplomado", nombre:"Diplomado"},
  { id: "Curso", nombre:"Curso"},
  { id: "Certificacion", nombre:"Certificación"},
  { id: "Otro", nombre:"Otro"}
];

const list_estatus = [
  { id: "Finalizado", nombre:"Finalizado"},
  { id: "En Curso", nombre:"En curso"},
  { id: "Trunco", nombre: "Trunco" },
  { id: "Otro", nombre: "Otro" }
];

export const InfoAcademica = ({ children }) => {
    const [formData, setFormData] = useState(INITIAL_STATE);
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
            name: formData.name,
            institucion: formData.institucion,
            fecha_inicio: formData.fecha_inicio,
            fecha_fin: formData.fecha_fin,
            estatus_academico: estatus,
            nivel_escolar: nivel,
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
  

    const onChangeHandler = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };


    const [nivel, SelectNivelAca] = useListas('Nivel Académico:', nivel_academico)
    SelectNivelAca()

    const [estatus, SelectEstatus ] = useListas('Estatus:', list_estatus)
    SelectEstatus()

    return (
            
      <SLayout>
          
          <SMain>{children}</SMain>
          <SFform onSubmit={onSubmitHandler}>
              <SFoormTitle> PERFIL ACADÉMICO </SFoormTitle>
                  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
              <SSLayout>
                <SelectNivelAca/>
                
                <InputText
                label="Título / Nombre Carrera: *"
                id="name"
                type="text"
                name="name"
                placeholder="Lic. Derecho"
                value={formData.name}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
                />
                <InputText
                label="Institución: *"
                id="institucion"
                type="text"
                name="institucion"
                value={formData.institucion}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
                />
                <SelectEstatus/>
              </SSLayout>


              <GridLayout>
                <InputText
                label="Fecha inicio: *"
                id="fecha_inicio"
                type="date"
                name="fecha_inicio"
                value={formData.fecha_inicio}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
                />
                <InputText
                label="Fecha término:"
                id="fecha_fin"
                type="date"
                name="fecha_fin"
                value={formData.fecha_fin}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={false}
                 />
              </GridLayout>
    
              {loading ? (
                <SpinnerSmall />
              ) : (
                <SBbutton type="submit">AÑADIR</SBbutton>
              )}
              <GridLayout>
              <div text-align="right">
                 <font size="2.5"> *Campos obligatorios.</font>
              </div>
              </GridLayout>
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
            </SFform>
            
      </SLayout>
      );
    };
    export default InfoAcademica;
    