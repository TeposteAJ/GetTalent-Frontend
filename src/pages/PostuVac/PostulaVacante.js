// import React, { useState } from "react";
// import Select from 'react-select';
// import Sidebar from "../../components/Sidebar/Sidebar";
// import { SLayout, SMain } from "../../components/Layout/styles";
// import { SFform, SFoormTitle, SBbutton, SLlaabel, SIinput} from "./PostulaVaStyle";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const urlApi = "https://gettalent-6.herokuapp.com/user_company/vacantes/"
// export const PostulaVacante = ({ children }) => {
//      // Inicializar el estado del formulario en blanco
//     const [nameEmpresa, setNameEmpresa] = React.useState('');
//     const [directEmpresa, setDirectEmpresa] = React.useState('');
//     const [cash, setCash] = React.useState('');
//     const [jornada, setJornada] = React.useState('');
//     // const [area, setArea] = React.useState('');
//     // const [rol, setRol] = React.useState('');
//     const [description, setDescription] = React.useState('');
//     const [value, setValue] = React.useState(null);
//     const [value2, setValue2] = React.useState(null);
//     const [value3, setValue3] = React.useState(null);
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
  
    
//     const onSubmitHandler = async (event) => {
//       event.preventDefault();
//       setError("");
//       // setLoading(true);
//       try {
//         const { data } = await axios.post(urlApi, {
//           email: value.email,
//           password: value2.password,
//           edad: value3.deberuas
//         });
//         // saveLocalStorage(data);
//         //redireccionamos
//         navigate("/home");
//       } catch (error) {
//         setError(
//           error
//             ? error.response.data.msg
//             : "Algo salio mal :c, vuelve a intentarlo"
//         );
//       } 
//     };
//     const options = [
//         { value: 'Presencial', label: 'Presencial' },
//         { value: 'Home', label: 'Home Ofice' },
//         { value: 'Hibrida', label: 'Hibrida' }
//       ]
    
//       const onDropdownChange = (value) => {
//         setValue(value);
//         console.log(value);
//       }
//       const optionss = [
//         { value2: 'Tecno', label: 'Tecnología de información' },
//         { value2: 'Ventas', label: 'Ventas' },
//         { value2: 'Marketing', label: 'Marketing' },
//         { value2: 'RecuersosH', label: 'Recuerso Humanos' }
//       ]
    
//       const onDropdownChangee = (value2) => {
//         setValue2(value2);
//         console.log(value2);
//       }
//       const optionsss = [
//         { value3: 'Programar', label: 'Programador' },
//         { value3: 'Analista', label: 'Analista' },
//         { value3: 'Infra', label: 'Infraestructura' },
//         { value3: 'Soporte', label: 'Soporte' }
//       ]
    
//       const onDropdownChangeee = (value3) => {
//         setValue3(value3);
//         console.log(value3);
//       }
//     return(
        
//     <SLayout>
//      <Sidebar />
//         <SMain>{children}</SMain>   
          
//     <SFform>
//     <SFoormTitle> DETALLE DE LA VACANTE </SFoormTitle>
//     <SLlaabel> Nombre de la empresa 
//     <SIinput type="text" name="nameEmpresa" value={nameEmpresa} onChange={(e) => setNameEmpresa(e.currentTarget.value)} />
//     </SLlaabel>        
//     <SLlaabel> Dirección de la empresa 
//     <SIinput type="text" name="directEmpresa" value={directEmpresa} onChange={(e) => setDirectEmpresa(e.currentTarget.value)} />
//     </SLlaabel>
//     <SLlaabel> Sueldo 
//     <SIinput type="text" name="cash" value={cash} onChange={(e) => setCash(e.currentTarget.value)}/>
//     </SLlaabel>
//     <SLlaabel> Jornada 
//     <SIinput type="text" name="jornada" value={jornada} onChange={(e) => setJornada(e.currentTarget.value)}/>
//     </SLlaabel>
//     <SLlaabel> Modalidad 
//     {/* <SIinput type="text" name="modalidad" value={modalidad} onChange={(e) => setModalidad(e.currentTarget.value)} /> */}
//     <SLlaabel>
//     <Select
//             value={value}
//             options={options}
//             onChange={onDropdownChange}>
//     </Select>
//     </SLlaabel>
//     </SLlaabel>
//     <SLlaabel> Área 
//     <SLlaabel>
//     <Select
//             value2={value2}
//             options={optionss}
//             onChange={onDropdownChangee}>
//     </Select>
//     </SLlaabel>
//     </SLlaabel>
//     <SLlaabel> Rol 
//     <SLlaabel>
//     <Select
//             value3={value3}
//             options={optionsss}
//             onChange={onDropdownChangeee}>
//     </Select>
//     </SLlaabel>
//     </SLlaabel>
//     <SLlaabel> Descripción de la vacante 
//     <SIinput type="text" name="description" value={description} onChange={(e) => setDescription(e.currentTarget.value)}/>
//     </SLlaabel> 
//     <Link to="/home">  
//     <SBbutton type="submit" className="Postular">
        
//           POSTULAR
//         </SBbutton> 
//         </Link>
//     </SFform>
//     </SLayout>
//         );
    
       
// };

// export default PostulaVacante;
