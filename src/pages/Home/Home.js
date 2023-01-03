import React from "react";
import { SLayout, SMain } from "../../components/Layout/styles";
import { Link } from "react-router-dom";

import {  SFoormTitle, L1, L2, L3, L4,L5} from "./HomeStyle";
export const HomeCompany = () => {
  return (         
    <SLayout>
    <SMain>
    <div id="imagenfondo">
        <SFoormTitle> ¡ Hola ! </SFoormTitle>
              <L1>Somos la plataforma open-source que decide</L1> 
              <L2>hacer un  cambio en  los procesos  de búsqueda y postulaciones de empleo. Nuestro pilar son las</L2>
              <L3>personas como tú y como nosotras que siempre estamos ambicionando nuevos retos y oportunidades. Te reconocemos
              a ti, tu tiempo y tus sueños como la parte más valiosa de nuestra causa.</L3>
              <L4>El comienzo del éxito empieza en Get-Talent.</L4>
              <L5> 
              <Link to="/company"> Nuestra Historia </Link></L5>
    </div>           
    </SMain>
    </SLayout>
  );
};


export const HomeApli = () => {
  return (         
    <SLayout>
    <SMain>
    <div id="imagenfondo">
        <SFoormTitle>¡ Hola !  </SFoormTitle>
              <L1>Somos la plataforma open-source que decide</L1> 
              <L2>hacer un  cambio en  los procesos  de búsqueda y postulaciones de empleo. Nuestro pilar son las</L2>
              <L3>personas como tú y como nosotras que siempre estamos ambicionando nuevos retos y oportunidades. Te reconocemos
              a ti, tu tiempo y tus sueños como la parte más valiosa de nuestra causa.</L3>
              <L4>El comienzo del éxito empieza en Get-Talent.</L4>
              <L5> 
              <Link to="/applicant"> Nuestra Historia </Link></L5>
    </div>       
    </SMain>
    </SLayout>
  );
};

