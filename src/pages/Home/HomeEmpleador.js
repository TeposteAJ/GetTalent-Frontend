import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/SidebarEmpresa";
import { SLayout, SMain } from "../../components/Layout/styles";
const HomeEmpleador = () => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>
        <Outlet />
      </SMain>
    </SLayout>
  );
};

export default HomeEmpleador;
