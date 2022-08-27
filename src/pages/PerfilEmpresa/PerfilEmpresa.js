// /* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { SFform, SFoormTitle, SBbutton,
          GridLayout,SDdiv,CajaError,CajaExito} from "./PerfilEmpresaStyle";
//import Sidebar from "../../components/Sidebar/SidebarEmpresa";
import { SLayout, SMain } from "../../components/Layout/styles";
import { useState } from "react";
import axios from "axios";
import InputText from "../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";
import TextArea from "../../components/Atoms/TextArea/TextArea";

/* Constantes */
const urlApi = "https://gettalent-6.herokuapp.com/empresa/informacion/";

const INITIAL_STATE = {
  user_id:"",
  empresa:"",
  description:"",
  logo:""
};



export const PerfilEmpresa = ({ children }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = React.useState(false);

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
      const { data, status } = await axios.post(urlApi,{
        "user_id":Number(localStorage.getItem('id')),
        "empresa":formData.empresa,
        "description":formData.description,
        "logo":formData.logo
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

    return (    
      <SLayout >
        
          <SMain>{children}</SMain>
          <SFform onSubmit={onSubmitHandler}>
              <SFoormTitle> INFORMACIÓN EMPLEADOR </SFoormTitle>
              <GridLayout>
                <InputText
                label="Nombre de la empresa: *"
                id="empresa"
                type="text"
                name="empresa"
                value={formData.empresa}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
              />
              <InputText
                label="Logo:"
                id="logo"
                type="url"
                name="logo"
                placeholder="Ingresa una URL."
                value={formData.logo}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
              />
              <div align="right">
                 <font size="2"> Compartenos tu logo por medio de un enlace publico.</font>
              </div>
             
              
              </GridLayout>
              <GridLayout>
                <TextArea
                label="Descripción: *"
                id="description"
                type="text"
                name="description"
                placeholder="Cuentanos brevemente sobre la historia de tu compañía..."
                value={formData.description}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
              />
              
              </GridLayout>
    
              {loading ? (
                <SpinnerSmall />
              ) : (
                <SBbutton type="submit">GUARDAR</SBbutton>
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
    export default PerfilEmpresa;
    