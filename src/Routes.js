import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
//import HomePage from "./pages/HomePage";
import { InfoPersonal } from "./pages/RegistroInfoPersonal/RegistroInformacionPersonal";
import NoEncontrado from "./pages/NoEncontrado/NoEncontrado";
import PerfilEmpresa from "./pages/PerfilEmpresa/PerfilEmpresa";
import InfoAcademica from "./pages/InfoAcademica/InfoAcademica";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import {RegistroVacante} from "./pages/RegistroVac/RegisVac";
import {Login} from "./pages/Login/Login";
import OlvideContra from "./pages/OlvideContra/OlvideContra";

import RequireAuth from "./components/RequireAuth"
// import Layout from "./components/Layout/Layout";
import Unauthorized from "./components/Unauthorized";
import {ROLESPATH} from "./Utils/ParseData"
import HomeEmpleador from "./pages/Home/HomeEmpleador";
import HomeSolicitante from "./pages/Home/HomeSolicitante";
import Interes from "./pages/Intereses/Intereses";
import  { ListadoVacantes } from "./pages/VacantesEmpresa/VacantesEmpresa"
import { ListadoVacantesSolicitante } from "./pages/VacantesSolicitante/VacantesSolicitante"; 
import { VacanteDetalle } from "./pages/VacanteDetalle/VacanteDetalle";
import { Postulaciones } from "./pages/Postulaciones/Postulaciones";
import ChangePass from "./pages/ChangePass/ChangePass";
import VideoSolicitante from "./pages/VideoSolicitante/VideoSolicitante";
import Logout from "./pages/Logout/Logout";


const ROLES = {
  empresa: "1",
  solicitante: "2",
};

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rutas de accesso publico */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistroUsuario />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/recoverypass" element={<OlvideContra />} />
        <Route path="*" element={< NoEncontrado/>} />
        <Route path="/logout" element={< Logout/>} />
        {/*<Route path="/configuracion" element={< ChangePass/>} />*/}
        

        {/* Rutas privadas (acceso a gente que ya se logueo) */}
        <Route element={<RequireAuth allowedRoles={ROLES.empresa} />}>
          <Route path={`${ROLESPATH.ROL01}`} element={<HomeEmpleador />}>
            <Route path="home" element={<h1>Home de la empresa</h1>} />
            <Route path="registervac" element={<RegistroVacante />} />
            <Route path="aplicantes" element={<ListadoVacantes />} />
            <Route path="perfilempresa" element={<PerfilEmpresa />} /> 
            <Route path="configuration" element={<ChangePass/>} />
  
          
          </Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={ROLES.solicitante} />}>
          <Route path={`${ROLESPATH.ROL02}`} element={<HomeSolicitante />}>
            <Route exact path="home" element={<h1>Home del solicitante</h1>} />
            <Route path="infopersonal" element={<InfoPersonal />} />
            <Route path="infoacademica" element={<InfoAcademica />} />
            <Route path="intereses" element={<Interes/>} />
            <Route path="video" element={<VideoSolicitante />} />
            <Route path="postulaciones" element={<Postulaciones/>} />
            <Route path="vacantes" element={<ListadoVacantesSolicitante />} />
            <Route path="vacantes/:vacante_id" element={<VacanteDetalle />} />
            <Route path="configuration" element={<ChangePass/>} />
            
          </Route>
        </Route>

      
        



      </Routes>
    </Router>
  );
};
