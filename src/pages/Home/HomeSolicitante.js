import React from "react";
import {} from "./homeStyle.css"
import { Outlet } from "react-router-dom";
import SidebarS from "../../components/Sidebar/SidebarSolicitante";
import { SLayout, SMain } from "../../components/Layout/styles";
import { H0, H1,H2, T1} from "./HomeStyle";
const HomeSolicitante = () => {
  return (
    <SLayout>
      <SidebarS />
      <SMain>
       <T1>¡Bienvenido solicitante!</T1>
        <Outlet />
        <div id="container">
          <H0>
          <H1>Contactanos: valentis.gettalent@gmail.com</H1>
          <H2>El comienzo del éxito empieza en Get-Talent.</H2>
          </H0>
          
        </div>
      </SMain>
    </SLayout>
  );
};

export default HomeSolicitante;
