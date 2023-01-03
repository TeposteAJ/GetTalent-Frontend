import React from "react";
import { useState } from "react";
import axios from "axios";
///import Sidebar from "../../components/Sidebar/SidebarSolicitante";
import { SLayout, SMain, ContenedorGral } from "../../components/Layout/styles";
import InputText from "../../components/Atoms/InputText/InputText";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";
import useListas from "../../components/Atoms/Listas/Listas";
import {SFform, SFoormTitle, SBbutton, Ha,
  GridLayout, CajaError, SDdiv, CajaExito} from "./RegistroInformacionPersonalStyle";
// import TarjetaVacante from "../../components/TarjetaVacante/TarjetaVacante";

/* Constantes */
const urlApi = "https://gettalent-6.herokuapp.com/users/";

const INITIAL_STATE = {
  user_id:"",
  name:"",
  middle_name:"",
  paternal_lastname:"",
  maternal_lastname:"",
  age:"",
  additional_mail:"",
  date_birth:"",
  gender:"femenino",
  marital_status:"otro"
};

const sexos = [
    { id: "Femenino", nombre: "Femenino" },
    { id: "Masculino", nombre: "Masculino" },
    { id: "Otro", nombre:"No binario"},
    { id: "Sin especificar", nombre:"Prefieron no mencionar."}
  ];

const edoscivil = [
    { id: "Soltero", nombre: "Soltera(o)" },
    { id: "Casado", nombre: "Casada(o)" },
    { id: "Otro", nombre:"Otro"},
    { id: "Sin especificar", nombre:"Prefieron no mencionar."}
  ];

export const InfoPersonal = ({ children }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = React.useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

      setLoading(true);

      const token = localStorage.getItem("accesstoken");
      if(!token)
      return

      const config = {
        headers: {
          "Content-Type": "application/json", 
  			  Authorization: `Bearer ${token}` 
        }
      }
    
    
    try {
      const { data, status } = await axios.post(urlApi,{
          user_id: Number(localStorage.getItem('id')),
          name: formData.name,
          middle_name: formData.middle_name,
          paternal_lastname: formData.paternal_lastname,
          maternal_lastname: formData.maternal_lastname,
          age: formData.age,
          additional_mail:formData.additional_mail,
          date_birth: formData.date_birth,
          gender: genero,
          marital_status:edocivil     
        }, 
        config
        );
        
        setLoading(false);
        console.log("data", data);
        console.log("status", status);
        if (status >= 200 && status < 300){
          console.log("Respuesta PERFECTO:", data);
          setSuccess(true);
          // const error = { message: data, status: response.status };
          // return Promise.reject(error);
        } 
      } catch (error) {
        setError("Algo salio mal :c, vuelve a intentarlo");
  
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    const onChangeHandler = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const [genero, SelectSexo] = useListas('Género:', sexos)
    SelectSexo()

    const [edocivil, SelectEstadoCivil ] = useListas('Estado civil:', edoscivil)
    SelectEstadoCivil()
      
    return (         
      <SLayout>
          
          <SMain>{children}</SMain>
          <SFform onSubmit={onSubmitHandler}>
             < ContenedorGral>
              <SFoormTitle> INFORMACIÓN PERSONAL </SFoormTitle>
              <GridLayout>
                <InputText
                label="Primer Nombre: *"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
              />
              <InputText
                label="Segundo Nombre:"
                id="middle_name"
                type="text"
                name="middle_name"
                value={formData.middle_name}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={false}
              />
              </GridLayout>
              <GridLayout>
                <InputText
                label="Apellido Paterno: *"
                id="paternal_lastname"
                type="text"
                name="paternal_lastname"
                value={formData.paternal_lastname}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
              />
              <InputText
                label="Apellido Materno: *"
                id="maternal_lastname"
                type="text"
                name="maternal_lastname"
                value={formData.maternal_lastname}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
              />
              </GridLayout>
              <GridLayout>
                <InputText
                label="Edad: *"
                id="age"
                type="number"
                name="age"
                value={formData.age}
                placeholder="39"
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
              />
              <InputText
                label="Fecha de nacimiento: *"
                id="date_birth"
                type="date"
                name="date_birth"
                value={formData.date_birth}
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={true}
              />
              </GridLayout>
              
              <GridLayout>
                <SelectSexo/>
                <SelectEstadoCivil/>
              </GridLayout>
              <GridLayout>
                <InputText
                label="Email adicional:"
                id="additional_mail"
                type="email"
                name="additional_mail"
                value={formData.additional_mail}
                placeholder="example@email.com"
                callback={(e) => {
                  onChangeHandler(e);
                }}
                isRequired={false}
             />
    
              {loading ? (
                <SpinnerSmall />
              ) : (
                <SBbutton type="submit">ENVIAR</SBbutton>
              )}
              </GridLayout>
              <GridLayout>
              <Ha> *Campos obligatorios.</Ha>
              </GridLayout>
              {success &&
                 <CajaExito>
                  <SDdiv>Registro Exitoso: datos guardados correctamente.</SDdiv>
                </CajaExito>
              }
              {error &&  
                 <CajaError>  
                    <SDdiv>Por favor, vuelva a intentarlo.</SDdiv>
                    <h5>Problema del Servidor: información no guardada.</h5>
                 </CajaError>
                }
                </ContenedorGral>
            </SFform>
            
      </SLayout>
      );
    };
    export default InfoPersonal;

//NOTA: de parte de Front ,seria bueno que cambiara el valor vacio a un null, en el email
// y que pudiera decirme que no acepta edades mayores a 90 años o algo asi, porque me da 400 
//pero no dice que es lo que sucede exactamente