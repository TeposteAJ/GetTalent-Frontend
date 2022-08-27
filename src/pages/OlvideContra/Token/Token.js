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
} from "./TokenStyle";
import InputText from "../../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../../components/Atoms/Spinner/SpinnerSmall";
import Toast from "../../../components/Atoms/Toast/Toast";
import RecoveryPass from "../../Recovery-Pass/RecoveryPass";

const urlApi = "https://gettalent-6.herokuapp.com/recovery/codigo-acceso/";
const INITIAL_STATE = {
  email: "",
  acceso_front:""
};
const email_b = localStorage.getItem('email');
console.log(email_b)

export const Token = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    setLoading(true);
    try {
      const { status, data } = await axios.post(urlApi, {
        email: localStorage.getItem('email'),
        acceso_front: formData.acceso_front
      });
      setLoading(false);
      console.log("data", data);
      console.log("status", status);
      if (status >= 200 && status < 300) {
        console.log("Respuesta PERFECTO:", data);
        setSuccess(true);
      } 
    } catch (error) {
      setError("Código Inválido.");

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
    localStorage.setItem("codigo_acceso", formData.acceso_front);
  };
  //console.log(localStorage)

  if (success)
    return <RecoveryPass/>;

  return (
    <>
      <SFixedContainer>
        <SIimg />
        <SFform onSubmit={onSubmitHandler}>
          <SFoormTitle> INGRESA TOKEN: </SFoormTitle>

          {error && <Toast color="error">{error}</Toast>}
          <InputText
            label="Código enviado a tu correo:"
            id="acceso_front"
            type="number"
            name="acceso_front"
            value={formData.acceso_front}
            placeholder="1234"
            callback={(e) => {
              onChangeHandler(e);
            }}
            isRequired={true}
          />
          {loading ? (
            <SpinnerSmall />
          ) : (
            <SBbutton type="submit" onClick = {saveData}>ENVIAR CODIGO</SBbutton>
          )}
        </SFform>
      </SFixedContainer>
    </>
  );
};



export default Token;