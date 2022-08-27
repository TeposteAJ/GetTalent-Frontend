import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/SidebarSolicitante";
import { SLayout, SMain } from "../../components/Layout/styles";
const HomeSolicitante = () => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>
        <Outlet />
      </SMain>
    </SLayout>
  );
};

export default HomeSolicitante;
