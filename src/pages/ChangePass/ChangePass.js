// /* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { SFform, SFoormTitle, SBbutton,Ha,
          GridLayout,SDdiv,CajaError,CajaExito} from "./ChangePassStyle";
import { SLayout, SMain,ContenedorGral } from "../../components/Layout/styles";
import { useState } from "react";
import axios from "axios";
import InputText from "../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";


/* Constantes */
const urlApi = "https://gettalent-6.herokuapp.com/change-password/";
const passwordPattern =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[~!-@#()$%^+=&*])[A-Za-z~!-@#()$%^+=&*]{6,20}$";


const INITIAL_STATE = {
  new_password:"",
  confirmPassword:""
};

export const ChangePass= ({ children }) => {
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
                "new_password":formData.new_password,
                "confirmPassword":formData.confirmPassword
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
            if (formData.new_password !== formData.confirmPassword) {
                setError("Passwords do not match");
                return;
            } 
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
              <SFoormTitle> CAMBIAR CONTRASEÑA</SFoormTitle>
              <GridLayout>
              
                <InputText
                label="Nueva Contraseña:"
                id="new_password"
                type="password"
                name="new_password"
                placeholder="Rt434&1*qws8/#."
                pattern={passwordPattern}
                value={formData.new_password}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
              />
              <InputText
                label="Confirmar contraseña:"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                pattern={passwordPattern}
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
                 <Ha>  
                 *La contraseña debe contener un mínimo de 6 y un máximo de 20
                   caracteres alfanuméricos; al menos una letra mayúscula, minuscula, numeros y un caracter
                   especial ~!-@#$%^+=&*.
                 </Ha >
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
    export default ChangePass;
    