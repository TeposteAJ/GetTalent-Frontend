// /* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { SFform, SFoormTitle, SBbutton,SLlaabel,SLlabel,ContenedorGral,
          GridLayout,SDdiv,CajaError,CajaExito, Ha} from "./VideoSolicitanteStyle";
//import Sidebar from "../../components/Sidebar/SidebarEmpresa";
import { SLayout, SMain} from "../../components/Layout/styles";
import { useState } from "react";
import axios from "axios";
import InputText from "../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";

/* Constantes */
const urlApi = "https://gettalent-6.herokuapp.com/users/videosolicitante/";

const INITIAL_STATE = {
  user_id:"",
  video:""
};

export const VideoSolicitante = ({ children }) => {
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
        "video":formData.video
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
              <ContenedorGral>
              <SFoormTitle> VIDEO PRESENTACIÓN </SFoormTitle>
              <SLlabel>Cuentanos sobre tí.</SLlabel>
              <SLlaabel>
                Sube un video tuyo, donde describas tus habilidades y actitudes en menos de 2 minuto.
                Este podrá ser consultado por las empresas a las que te postules.
              </SLlaabel>
              <GridLayout>
              <InputText
                label="Tu video:*"
                id="video"
                type="url"
                name="video"
                placeholder="Ingresa una URL."
                value={formData.video}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
              />
              <Ha> Compartenos tu logo por medio de un enlace publico.</Ha>
             
              </GridLayout>    
              {loading ? (
                <SpinnerSmall />
              ) : (
                <SBbutton type="submit">GUARDAR</SBbutton>
              )}
              <GridLayout>
        
              <Ha> *Campos obligatorios.</Ha>
              
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
              </ContenedorGral>
            </SFform>
            
            
      </SLayout>
      );
    };
    export default VideoSolicitante;
    