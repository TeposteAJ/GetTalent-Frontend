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
} from "./LoginStyle";
import InputText from "../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";
import Toast from "../../components/Atoms/Toast/Toast";
import { ParseRol, getRolePath } from "../../Utils/ParseData";
import useAuth from "../../Hooks/useAuth";

/* Constantes */
const passwordPattern =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[~!-@#()$%^+=&*])[A-Za-z~!-@#()$%^+=&*]{6,20}$";
const urlApi = "https://gettalent-6.herokuapp.com/login/";
const INITIAL_STATE = {
  email: "",
  password: "",
};

export const Login = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(urlApi, {
        email: formData.email,
        password: formData.password,
      });
      const currentRole = getRolePath(ParseRol(data.is_empleador));
      setLoading(false);
      //guardamos datos en el localstorage
      saveLocalStorage(data);
      //guardamos en el contexto
      saveInAuthContext();
      //redireccionamos
      navigate(`${currentRole}/home`);
    } catch (error) {
      setError("Alguno de tus datos es incorrecto.");

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

  const saveLocalStorage = (data) => {
    //Borramos localstorage previo
    localStorage.clear();
    //guardamos el token
    localStorage.setItem("accesstoken", data.tokens.access);
    localStorage.setItem("refreshtoken", data.tokens.refresh);
    localStorage.setItem("role", ParseRol(data.is_empleador));
    localStorage.setItem("id", Number(data.id));
    // localStorage.setItem("id", data.id);
  };

  // console.log(localStorage);
  //console.log(localStorage);

  const saveInAuthContext = () => {
    setAuth({
      token: localStorage.getItem("accesstoken"),
      role: localStorage.getItem("role"),
    });
  };

  return (
    <>
      <SFixedContainer>
        <SIimg />
        <SFform onSubmit={onSubmitHandler}>
          <SFoormTitle> ACCEDER </SFoormTitle>

          {error && <Toast color="error">{error}</Toast>}

          <InputText
            label="Email"
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
          <InputText
            label="Password"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            pattern={passwordPattern}
            callback={(e) => {
              onChangeHandler(e);
            }}
            isRequired={true}
            
          />
          {loading ? (
            <SpinnerSmall />
          ) : (
            <SBbutton type="submit">ENTRAR</SBbutton>
          )}
          <Link to="/register"> Registrate </Link>
          <Link to="/recoverypass"> Olvide contraseña </Link>
        </SFform>
      </SFixedContainer>
    </>
  );
};

export default Login;