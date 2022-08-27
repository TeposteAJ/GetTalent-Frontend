import React from "react";
// import { GlobalStyle } from "../styles/globalStyles";
// import Form from "../components/Form/Form";
import {
  SBbutton,
  SFform,
  SFoormTitle,
  SDdiv,
  SIimg,
  SLlabel,
  SLlaabel,
  SFixedContainer,
  CajaExito,
} from "../../components/Form/RegistroStyles";
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import ToggleInput from "../../components/Form/ToggleInput";
import { Link } from "react-router-dom";


const passwordPattern =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[~!-@#()$%^+=&*])[A-Za-z~!-@#()$%^+=&*]{6,20}$";

export const RecoveryPass = () => {
  // Inicializar el estado del formulario en blanco
  const [new_password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  
  // Valores para dropdown y constante de cambio

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
      new_password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Please fill in all fields");
      return;
    }

    // Asegurarse que las contraseñas coincidan
    if (new_password.trim() !== confirmPassword.trim()) {
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
        email: localStorage.getItem('email'),
        acceso_front: localStorage.getItem('codigo_acceso'),
        new_password,
        confirmPassword, 
      }),
    };

    fetch("https://gettalent-6.herokuapp.com/reset-password/", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        // Checar por respuesta del usuario
        if (!response.ok) {
          const success= { message: data, status: response.status };
          return Promise.reject(success);
        }

        setSuccess(true);
      })
      .catch((error) => {
        setError(`Error(${error.status}): ${error.message}`);
      });
  };

  // Mostrar el mensaje de éxito si el estado success es true
//   if (success)
//     return <OkRegistro/>;

  // Mostrar el formulario

  return (
    <SFixedContainer>
      <SIimg />
      <SFform className="registroUsuario" onSubmit={handleSubmit}>
        <SFoormTitle> CREAR NUEVA CONTRASEÑA </SFoormTitle>
        {error && <SDdiv className="registroUsuario__error"> {error} </SDdiv>}
        {success &&
                 <CajaExito>
                  <SDdiv>Contraseña cambiada correctamente.</SDdiv>
                  <Link to="/"> Ingresar </Link>
                </CajaExito>
              }
        {success && <SDdiv color="blue"> Contraseña cambiada correctamente. </SDdiv>}
        <SLlabel>
          Nueva Contraseña:
          <ToggleInput
            name="new_password"
            value={new_password}
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

        <SBbutton type="submit" className="registroUsuario__submit">
          ENVIAR
        </SBbutton>
      </SFform>
    </SFixedContainer>
  );
};
export default RecoveryPass;