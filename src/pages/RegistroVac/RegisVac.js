import React from "react";
import { useState } from "react";
import axios from "axios";
import { SLayout, SMain } from "../../components/Layout/styles";
import { SFform, SFoormTitle, SBbutton, Grid2Layout, Grid3Layout,
  GridLayout,SDdiv,CajaError,CajaExito} from "./RegisVacStyle";
import TextArea from "../../components/Atoms/TextArea/TextArea";
import InputText from "../../components/Atoms/InputText/InputText";
import useListas from "../../components/Atoms/Listas/Listas";
import SpinnerSmall from "../../components/Atoms/Spinner/SpinnerSmall";

const urlApi = "https://gettalent-6.herokuapp.com/user_company/vacantes/"

///agrego estas listas que te harán falta:
const areas_list = [
  {id: "Marketing", nombre: "Marketing"},
  {id: "Ventas", nombre: "Ventas"},
  {id: "Humanidades", nombre: "Humanidades"},
  {id: "Administración", nombre: "Administración"},
  {id: "Industria", nombre: "Industria"},
  {id: "Analisis de Datos", nombre: "Analista de Datos"},
  {id: "Tecnología", nombre: "Tecnología"},
  {id: "Desarrollo de software", nombre:"Desarrollo de Software"},
  {id: "Ciencias Exactas", nombre: "Ciencias Exactas"}
];

const experiencia_list = [
  {id: "Becario", nombre: "Becario"},
  {id: "Primer Empleo", nombre: "Primer Empleo"},
  {id: "Experiencia Media", nombre: "Experiencia Media"},
  {id: "Mucha experiencia", nombre: "Mucha Experiencia"},
  {id: "Cargos ejecutivos", nombre: "Cargos Ejecutivos"}
];

const estado_list = [
  {id: "Aguascalientes", nombre: "Aguascalientes"}, 
  {id: "Baja California", nombre: "Baja California"},
  {id: "Baja California Sur", nombre: "Baja California Sur"},
  {id: "Campeche", nombre: "Campeche"},
  {id: "Chiapas", nombre: "Chiapas"},
  {id: "Chihuahua", nombre: "Chihuahua"}, 
  {id: "Ciudad de México", nombre: "Ciudad de México"},
  {id: "Coahuila", nombre: "Coahuila"}, 
  {id: "Colima", nombre: "Colima"},
  {id: "Durango", nombre: "Durango"},
  {id: "Guanajuato", nombre: "Guanajuato"},
  {id: "Guerrero", nombre: "Guerrero"}, 
  {id: "Hidalgo", nombre: "Hidalgo"},
  {id: "Jalisco", nombre: "Jalisco"},
  {id: "Estado de México", nombre: "Estado de México"},
  {id: "Michoacán", nombre: "Michoacán"},
  {id: "Morelos", nombre: "Morelos"},
  {id: "Nayarit", nombre: "Nayarit"},
  {id: "Nuevo León", nombre: "Nuevo León"},
  {id: "Oaxaca", nombre: "Oaxaca"},
  {id: "Puebla", nombre: "Puebla"},
  {id: "Querétaro", nombre: "Querétaro"},
  {id: "Quintana Roo", nombre: "Quintana Roo"},
  {id: "San Luis Potosí", nombre: "San Luis Potosí"}, 
  {id: "Sinaloa", nombre: "Sinaloa"},
  {id: "Sonora", nombre: "Sonora"},
  {id: "Tabasco", nombre: "Tabasco"},
  {id: "Tamaulipas", nombre: "Tamaulipas"},
  {id: "Tlaxcala", nombre: "Tlaxcala"},
  {id: "Veracruz", nombre: "Veracruz"},
  {id: "Yucatán", nombre: "Yucatán"},
  {id: "Zacatecas", nombre: "Zacatecas"},
      ]
export const RegistroVacante = ({ children }) => {
     // Inicializar el estado del formulario en blanco
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  

    const [formData, setFormData] = useState({
      name:null,
      localidad:null,
      estado:null, //lista
      requisitos:null,
      vacante_video:null,
      experiencia:null, //lista
      area: null, //lista
      tipo_trabajo:null,
      modalidad:null, 
      descripcion:null,
      sueldo:null,
      pregunta1: null ,
      pregunta2: null,
      pregunta3:null,
    });
   
    const modalidad_list = [
      { id: "Presencial", nombre: 'Presencial'},
      { id: "Virtual", nombre: 'Virtual' },
      { id: "Hibrido", nombre:'Hibrido'},
      { id: "Sin especificar", nombre:"Sin especificar"}
    ]; 
    
 
    const tipotrabajo_list = [
      { id: "Tiempo completo", nombre: "Tiempo completo" },
      { id: "Medio tiempo", nombre: "Medio tiempo" },
      { id: "Proyecto", nombre:"Proyecto"},
      { id: "Sin especificar", nombre:"Sin especificar"}
    ];
    
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      setError("");
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
    const { data, status } = await axios.post(urlApi, {
      user_id: Number(localStorage.getItem('id')),
      name:formData.name,
      localidad:formData.localidad,
      estado:estado_seleccion, //lista
      requisitos:formData.requisitos,
      vacante_video:formData.vacante_video,
      experiencia: experiencia_seleccion, //lista, paso solo el valor seleccionado
      area: areas_seleccion,//lista, paso solo el valor seleccionado
      tipo_trabajo:tipotrabajo_seleccion,
      modalidad:modalidad_seleccion, 
      descripcion:formData.descripcion,
      sueldo:formData.sueldo,
      preguntasmodel:[{
        pregunta1: formData.pregunta1,
        pregunta2: formData.pregunta2,
        pregunta3:formData.pregunta3,
      }]
    },
   config
    );
    setLoading(false);
   
    //redireccionamos
    if (status >= 200 && status < 300) {
      console.log("Respuesta PERFECTO:", data);
      setSuccess(true);
    } 
  } catch (error) {
    setError("Algo salio mal :c, vuelve a intentarlo");
  
    console.log(error)
    console.error(error);
    console.log(error?.response)
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
  ///Agrego la función Hook para las listas que faltan , incluso agrego la de estados pero falta construir la lista
    const [experiencia_seleccion, SelectExperiencia] = useListas('Nivel de Experiencia:*', experiencia_list)
    SelectExperiencia()

    const [estado_seleccion, SelectEstado] = useListas('Estado:*', estado_list)
    SelectEstado()
    
    const [areas_seleccion, SelectArea] = useListas('Area:*', areas_list)
    SelectArea()

    const [modalidad_seleccion, SelectModalidad] = useListas('Modalidad:*', modalidad_list)
    SelectModalidad()

    const [tipotrabajo_seleccion, SelectTipotrabajo] = useListas('Tipo de Trabajo:*', tipotrabajo_list)
    SelectTipotrabajo()

    return(
        
    <SLayout>
        <SMain>{children}</SMain>   
          
    <SFform onSubmit={onSubmitHandler}>
    <SFoormTitle> VACANTE </SFoormTitle>
    {/* {error && <Toast color="error">{error}</Toast>} */}
    <Grid2Layout>
    <InputText
    label="Nombre del Puesto*"
    id="name"
    type="text"
    name="name" 
    value={formData.name}
    callback={(e) => {
      onChangeHandler(e);
    }}
    />
    <InputText
    label="Sueldo"
    id="sueldo"
    type="text"
    name="sueldo"
    placeholder="10,000" 
    value={formData.sueldo}
    callback={(e) => {
      onChangeHandler(e);
    }}
    />
    </Grid2Layout>
    <Grid3Layout>
    <SelectArea/>
    <SelectExperiencia/>
    <SelectModalidad/>
    <SelectTipotrabajo/>
    <SelectEstado/>
    <InputText
    label="Video:"
    id="vacante_video"
    type="url"
    name="vacante_video"
    placeholder="https://youtbe.com.mx" 
    value={formData.vacante_video}
    callback={(e) => {
      onChangeHandler(e);
    }}
    />
    <InputText
    label="Pregunta 1*"
    id="pregunta1"
    type="text"
    name="pregunta1"
    placeholder="¿Qué te gustaría saber sobre tus candidatos?"
    value={formData.pregunta1}
    callback={(e) => {
      onChangeHandler(e);
    }}
    isRequired={true}
    />
    <InputText
    label="Pregunta 2*"
    id="pregunta2"
    type="text"
    name="pregunta2"
    placeholder="¿Qué es importante conocer de tus aspirantes?"
    value={formData.pregunta2}
    callback={(e) => {
      onChangeHandler(e);
    }}
    isRequired={true}
    />
    <InputText
    label="Pregunta 3*"
    id="pregunta3"
    type="text"
    name="pregunta3"
    value={formData.pregunta3}
    callback={(e) => {
      onChangeHandler(e);
    }}
    isRequired={true}
    />
    </Grid3Layout>
    <Grid2Layout>
    <TextArea
    label="Requisitos: *"
    id="requisitos"
    type="text"
    name="requisitos"
    placeholder="Específica lo que tu empresa necesita..."
    value={formData.requisitos}
    callback={(e) => {
      onChangeHandler(e);
    }}
    isRequired={true}
    />
    <TextArea
    label="Descripción: *"
    id="descripcion"
    type="text"
    name="descripcion"
    placeholder="Cuentanos brevemente sobre la historia de tu compañía..."
    value={formData.descripcion}
    callback={(e) => {
      onChangeHandler(e);
    }}
    isRequired={true}
    /> 
    </Grid2Layout> 
   
    {loading ? (
                    <SpinnerSmall />
                ) : (
                    <SBbutton type="submit">Guardar</SBbutton>
                )}
  
        <GridLayout>
              <div text-align="right">
                 <font size="2.5"> *Campos obligatorios.</font>
              </div>
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
    </SFform>
    
    </SLayout>
        );
    
       
};
export default RegistroVacante;