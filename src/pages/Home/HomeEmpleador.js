import React from "react";
import {} from "./homeStyle.css"
import { Outlet } from "react-router-dom";
import SidebarE from "../../components/Sidebar/SidebarEmpresa";
import { SLayout, SMain } from "../../components/Layout/styles";
import { H1, H2, H0, T1 } from "./HomeStyle";
const HomeEmpleador = () => {
  return (
    <SLayout>
      <SidebarE />
      <SMain>
       <T1 >¡Bienvenido empleador!</T1>
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

export default HomeEmpleador;
