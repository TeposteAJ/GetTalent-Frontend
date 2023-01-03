import React from "react";
import { SLayout, SMain } from "../../components/Layout/styles";
import {} from "./Nosotras.css"
import SidebarE from "../../components/Sidebar/SidebarEmpresa";
import SidebarS from "../../components/Sidebar/SidebarSolicitante";
import {  SFoormTitle, L3, L5,L6,Grid3Layout, Espacio} from "./NosotrasStyle";

export const NosotrasS = () => {
  return (         
    <SLayout>
    <SidebarS />
    <SMain>
    <SFoormTitle> Equipo Valentis-Women </SFoormTitle>
    <div id="nosotras">
              <Grid3Layout >
              <L3>Karen</L3>
              <L3>Floren</L3>
              <L3>Pris</L3>
              <L3>Jayro</L3>
              <L6>Backend</L6>
              <L6>Backend</L6>
              <L6>Backend</L6>
              <L6>Scrum Master</L6>
              </Grid3Layout>
              <Espacio></Espacio>
              <Grid3Layout >
              <L3>Rubi</L3>
              <L3>Angie</L3>
              <L3>Pao</L3>
              <L3>Frontín</L3>
              <L6>Frontend</L6>
              <L6>Backend/Frontend</L6>
              <L6>Frontend</L6>
              <L6>Mascota</L6>
              </Grid3Layout>

    </div> 
    <L5> <a href="javascript:history.back()"> Volver </a></L5>          
    </SMain>
    </SLayout>
  );
};

export const NosotrasE = () => {
    return (         
      <SLayout>
      <SidebarE />
      <SMain>
      <SFoormTitle> Equipo Valentis-Women </SFoormTitle>
      <div id="nosotras">
                <Grid3Layout >
                <L3>Karen</L3>
                <L3>Floren</L3>
                <L3>Pris</L3>
                <L3>Jayro</L3>
                <L6>Backend</L6>
                <L6>Backend</L6>
                <L6>Backend</L6>
                <L6>Scrum Master</L6>
                </Grid3Layout>
                <Espacio></Espacio>
                <Grid3Layout >
                <L3>Rubi</L3>
                <L3>Angie</L3>
                <L3>Pao</L3>
                <L3>Frontín</L3>
                <L6>Frontend</L6>
                <L6>Backend/Frontend</L6>
                <L6>Frontend</L6>
                <L6>Mascota</L6>
                </Grid3Layout>
  
      </div> 
      <L5> <a href="javascript:history.back()"> Volver </a></L5>          
      </SMain>
      </SLayout>
    );
  };
