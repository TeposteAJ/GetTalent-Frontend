import React from "react";
import Select from 'react-select';
// import { GlobalStyle } from "../styles/globalStyles";
// import Form from "../components/Form/Form";
import {
  SBbutton,
  SFform,
  SFoormTitle,
  SIinput,
  SDdiv,
  SIimg,
  SLlabel,
  SLlaabel,
  SFixedContainer,
} from "../components/Form/RegistroStyles";
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";

import ToggleInput from "../components/Form/ToggleInput";
import OkRegistro from "./OkRegistro/OkRegistro";
// import Image from "../assets/ilustration/Image"

const passwordPattern =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[~!-@#()$%^+=&*])[A-Za-z~!-@#()$%^+=&*]{6,20}$";

export const RegistroUsuario = () => {
  // Inicializar el estado del formulario en blanco
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [value, setValue] = React.useState(null);

  // Valores para dropdown y constante de cambio
  const options = [
    { value: true, label: "Soy una empresa" },
    { value: false, label: "Busco trabajo" },
  ];

  const onDropdownChange = (value) => {
    setValue(value);
    console.log(value);
  };

  // Inicializar el estado de error y éxito
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (event) => {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();

    // Resetear el estado de error
    setError("");

    // Validar el formulario
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Please fill in all fields");
      return;
    }

    // Asegurarse que las contraseñas coincidan
    if (password.trim() !== confirmPassword.trim()) {
      setError("Passwords do not match");
      return;
    }

    // console.log(`Data submitted:
    // email: ${email}
    // password: ${password}
    // confirmPassword: ${confirmPassword}`);

    // Enviar el formulario
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,//email = email
        password,
        confirmPassword,
        is_empleador: value?.value,
      }),
    };

    fetch("https://gettalent-6.herokuapp.com/signup/", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        // Checar por respuesta del usuario
        if (!response.ok) {
          const error = { message: data, status: response.status };
          return Promise.reject(error);
        }

        setSuccess(true);
      })
      .catch((error) => {
        setError(`Error(${error.status}): ${error.message}`);
      });
  };

  // Mostrar el mensaje de éxito si el estado success es true
  if (success)
    return <OkRegistro/>;

  // Mostrar el formulario

  return (
    <SFixedContainer>
      <SIimg />
      <SFform className="registroUsuario" onSubmit={handleSubmit}>
        <SFoormTitle> CREAR CUENTA </SFoormTitle>
        {error && <SDdiv className="registroUsuario__error"> {error} </SDdiv>}
        <SLlabel>
          Correo electrónico:
          <SIinput
            type="email"
            name="email"
            value={email}
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </SLlabel>
        <SLlabel>
          Contraseña:
          <ToggleInput
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            pattern={passwordPattern}
          />
        </SLlabel>
        <SLlaabel>
          *La contraseña debe contener un mínimo de 6 y un máximo de 20
          caracteres alfanuméricos; al menos una letra mayúscula, minuscula, numeros y un caracter
          especial ~!-@#$%^+=&*.
        </SLlaabel>
        <SLlabel>
          Confirmar contraseña:
          <ToggleInput
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            pattern={passwordPattern}
          />
        </SLlabel>
        <SLlabel>
          ¿Para qué usarás Get Talent?
          <Select
            value={value}
            options={options}
            onChange={onDropdownChange}
          ></Select>
        </SLlabel>
        <SLlaabel alignText="center">
          <Link to="/"> Ya tengo una cuenta </Link>
        </SLlaabel>

        <SBbutton type="submit" className="registroUsuario__submit">
          ENTRAR
        </SBbutton>
      </SFform>
    </SFixedContainer>
  );
};
export default RegistroUsuario;