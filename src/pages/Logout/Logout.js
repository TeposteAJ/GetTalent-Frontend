/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  SFixedContainer,
  SIimg,
  SFform,
  SFoormTitle,
  SBbutton,
} from "./LogoutStyle";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";
import Toast from "../../components/Atoms/Toast/Toast";

/* Constantes */
const urlApi = "https://gettalent-6.herokuapp.com/logout/";

export const Logout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("accesstoken");
    //console.log(token);
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
        "refresh":localStorage.getItem('refreshtoken'),
    },
        config
        );
        setLoading(false);
        //console.log(localStorage)
        if (status >= 200 && status < 300) {
          localStorage.clear()
          console.log("Respuesta PERFECTO:", data);
          console.log(localStorage)
          navigate(`/`);
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

  return (
    <>
      <SFixedContainer>
        <SIimg />
        <SFform onSubmit={onSubmitHandler}>
          <SFoormTitle> . . .</SFoormTitle>

          {error && <Toast color="error">{error}</Toast>}

          {loading ? (
            <SpinnerSmall />
          ) : (
            <SBbutton type="submit">Cerrar Sesión</SBbutton>
          )}
           <Link to="/"> Volver </Link>
        </SFform>
      </SFixedContainer>
    </>
  );
};

export default Logout;