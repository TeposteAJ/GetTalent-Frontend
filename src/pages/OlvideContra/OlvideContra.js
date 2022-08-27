/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  SFixedContainer,
  SIimg,
  SFform,
  SFoormTitle,
  SBbutton
} from "./OlvideContraStyle";
import InputText from "../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";
import Toast from "../../components/Atoms/Toast/Toast";
// import Modal from "../../components/Modals/Modal";
// import { useModal } from "../../Hooks/useModal";
import Token from "./Token/Token";


const urlApi = "https://gettalent-6.herokuapp.com/recovery/password-email/";
//const urlApi = "http://localhost:8000/recovery/password-email/";
const INITIAL_STATE = {
  email: ""
};

export const OlvideContra = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = useState("");
  // const[isOpenModal1,OpenModal1,CloseModal1] = useModal(true)

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    setLoading(true);
    try {
      const { status, data } = await axios.post(urlApi, {
        email: formData.email
      });
      setLoading(false);
      console.log("data", data);
      console.log("status", status);
      if (status >= 200 && status < 300) {
        console.log("Respuesta PERFECTO:", data);
        setSuccess(true);
      } 
    } catch (error) {
      setError("Algo salio mal :c, vuelve a intentarlo");

      console.error(error);
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
  
  const saveData = () => {
    localStorage.clear();
    localStorage.setItem('email', formData.email)
  }
  //console.log(localStorage)
  
  // Mostrar el mensaje de éxito si el estado success es true
  if (success)
    return <Token/>;
  return (
    <>
      <SFixedContainer>
        <SIimg />
        <SFform onSubmit={onSubmitHandler}>
          <SFoormTitle> Enviar código de acceso al correo</SFoormTitle>

          {error && <Toast color="error">{error}</Toast>}
          <InputText
            label="Ingresa tu Email de registro:"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="example@email.com"
            callback={(e) => {
              onChangeHandler(e);
            }}
            isRequired={true}
          />
          {loading ? (
            <SpinnerSmall />
          ) : (
            <SBbutton type="submit" onClick = {saveData}>
              ENVIAR
              
            </SBbutton>
          )}
          
        </SFform>
      </SFixedContainer>
    </>
  );
};

export default OlvideContra;