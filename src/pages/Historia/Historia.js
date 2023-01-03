import React from "react";
import {} from "./HistoriaStyle.css"
import { SLayout, SMain } from "../../components/Layout/styles";
import {  SFoormTitle, L1, L2, L3, L4,L5} from "./HistoriaStyle";
import SidebarE from "../../components/Sidebar/SidebarEmpresa";
import SidebarS from "../../components/Sidebar/SidebarSolicitante";

export const HistoriaE = () => {
  return (
    <SLayout>
      <SidebarE />
      <SMain>
        
        <div id="contener">
              <SFoormTitle> Nuestra Historia </SFoormTitle>
              <L1>Somos mujeres autodenominadas  </L1> 
              <L2>"Valentis Women" a quienes el destino</L2>
              <L3> juntó en un Bootcamp. Fuimos becadas por el <a href="https://www.britishcouncil.org.mx/" target="_blank">British Council</a> para el
              programa <a href="https://skillsfor.womenintech.mx/" target="_blank">Skills For Woman In Tech</a>, cuyo objetivo es acortar la brecha de género en el
              STEM. Esto nos permitió tener una gran diversidad de talentos e ideas que convergen en
              este proyecto. Con el cual buscamos dar solución a los procesos laboriosos y tardados,
              que emergen al intentar postularse a vacantes. Siendo nuestro punto de partida las propias experiencias desalentadoras que 
                enfrentamos al ingresar al mundo laboral. </L3>
              <L3></L3>
              <L3>Durante este proceso de aprendizaje, que incluyó lágrimas, dudas, miedos, y estres, 
                 tuvimos la dicha y fortuna de forjar una gran amistad.</L3>
              <L5> 
                <L4>Valentis Women.</L4>
                <a href="/nosotras">Conocenos</a>
                
                </L5> 
        </div>
      </SMain>
    </SLayout>
  );
};


export const HistoriaS = () => {
  return (
    <SLayout>
      <SidebarS />
      <SMain>
        
        <div id="contener">
              <SFoormTitle> Nuestra Historia </SFoormTitle>
              <L1>Somos mujeres autodenominadas  </L1> 
              <L2>"Valentis Women" a quienes el destino</L2>
              <L3> juntó en un Bootcamp. Fuimos becadas por el <a href="https://www.britishcouncil.org.mx/">British Council</a> para el
              programa <a href="https://skillsfor.womenintech.mx/">Skills For Woman In Tech</a>, cuyo objetivo es acortar la brecha de género en el
              STEM. Esto nos permitió tener una gran diversidad de talentos e ideas que convergen en
              este proyecto. Con el cual buscamos dar solución a los procesos laboriosos y tardados,
              que emergen al intentar postularse a vacantes. Siendo nuestro punto de partida las propias experiencias desalentadoras que 
                enfrentamos al ingresar al mundo laboral. </L3>
              <L3></L3>
              <L3>Durante este proceso de aprendizaje, que incluyó lágrimas, dudas, miedos, y estres, 
                 tuvimos la dicha y fortuna de forjar una gran amistad.</L3>
              <L5> 
                <L4>Valentis Women.</L4>
                <a href="/nosotraS">Conocenos</a>
                
                </L5> 
        </div>
      </SMain>
    </SLayout>
  );
};
