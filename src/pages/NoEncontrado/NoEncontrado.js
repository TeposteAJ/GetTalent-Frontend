import React from "react";

import {
  SFixedContainer,
  SIimg,
  SFform,
  SFoormTitle,
} from "./NoEncontradoStyle";


export const NoEncontrado = () => {
  return (
    <>
      <SFixedContainer>
        <SIimg />
        <SFform>
          <SFoormTitle> ERROR 404:</SFoormTitle>
          <SFoormTitle> PÁGINA NO ENCONTRADA.</SFoormTitle>
          <SFoormTitle> </SFoormTitle>
        </SFform>
      </SFixedContainer>
    </>
  );
};
export default NoEncontrado;
