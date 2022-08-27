import React from "react";
import { Link } from "react-router-dom";
import {
  SFixedContainer,
  SIimg,
  SFform,
  SFoormTitle,
  SBbutton,
} from "./OkRegistroStyle";


export const OkRegistro= () => {
  return (
    <>
      <SFixedContainer>
        <SIimg />
        <SFform>
          <SFoormTitle> REGISTRO EXITOSO!!</SFoormTitle>
          <h2> Usuario creado :D </h2>
          <h3> Revisa tu correo para activar tu cuenta.</h3>
            
                <SBbutton type="submit">
                  <Link to="/"> Ingresar a Get Talent </Link>
                </SBbutton>
              
        </SFform>
      </SFixedContainer>
    </>
  );
};
export default OkRegistro;
