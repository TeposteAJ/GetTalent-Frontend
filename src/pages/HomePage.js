import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { SLayout, SMain } from "../components/Layout/styles";
const HomePage = () => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>
        <Outlet />
      </SMain>
    </SLayout>
  );
};

export default HomePage;
