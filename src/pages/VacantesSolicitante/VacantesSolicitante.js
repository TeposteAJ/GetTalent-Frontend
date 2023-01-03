import React, {useState, useEffect} from 'react'
import axios from "axios";
import { SLayout, SMain } from "../../components/Layout/styles";
import { SFform, SFoormTitle, ContenedorVacantes, ContenedorFiltros, SelectContenedor , Select } from './VacantesSolicitanteStyle'
import  {TarjetaVacanteSolicitante} from '../../components/TarjetaVacanteSolicitante/TarjetaVacanteSolicitante'
import { AREAS, EXPERIENCIA, MODALIDAD, TIPO_TRABAJO, ESTADOS } from '../../const';




export const ListadoVacantesSolicitante = ({children}) => {
    const [category, setCategory] = useState('');
    const [vacantes, setVacantes] = useState([]);



    useEffect(() => {
        const getListaVacantes = async () => {
        try {
            const token = localStorage.getItem("accesstoken");
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${token}` 
                }
            }
            const  {data} = await axios('https://gettalent-6.herokuapp.com/vacantes/', config)
            setVacantes(data.vacantes)
            console.log(data)
        
            
        } catch(err) {
			console.log('NO SE PUDO OBTENER LAS VACANTES', err?.response)
        }};
    getListaVacantes();
    }, [])



    //FILTROS
    useEffect(() => {
        const getCategorias = async () => {

            try {
                const token = localStorage.getItem("accesstoken");
                if(!token) return
    
                const config = {
                    headers: {
                        "Content-Type": "application/json", 
                        Authorization: `Bearer ${token}` 
                    }
                }
                const url = `https://gettalent-6.herokuapp.com/vacantes/${category}/`
                console.log(url)

            const { data } = await axios(url,config)
                setVacantes(data)
                console.log(data, 'VACANTES')

            
    
        } catch(err) {
            if(err?.response?.status === 400){
                setVacantes([])
            }
			console.log('NO SE PUDO OBTENER LA CATEGORIA', err?.response)
            console.log(err)
        }};
        getCategorias()
    }, [category])





    return (
    <SLayout>
        <SMain>{children}</SMain>
        <SFform>
        <SFoormTitle>VACANTES DISPONIBLES</SFoormTitle>
        
        {/* <p>Filtros</p> */}
        <form>
        <ContenedorFiltros>  
            <SelectContenedor>
                <label>Area</label>    
                <Select
                onChange={e => setCategory(e.target.value)}
                >   
                    <option value=""> - - - -</option>
                    {
                        AREAS.map(area =>(
                        <option
                        key={area.id}
                        value={area.id}
                        >
                        {area?.nombre}
                        </option>  
                    ))
                }
                </Select>
            </SelectContenedor>

            <SelectContenedor>
                <label>Experiencia</label>
                <Select
                onChange={e => setCategory(e.target.value)}
                >   
                    <option value=""> - - - -</option>
                    {
                        EXPERIENCIA.map(experiencia =>(
                        <option
                        key={experiencia.id}
                        value={experiencia.id}
                        >
                        {experiencia?.nombre}
                        </option>  
                    )) 
                }
                </Select>
            </SelectContenedor>

            <SelectContenedor>
                <label>Modalidad</label>
                <Select
                onChange={e => setCategory(e.target.value)}
                >   
                    <option value=""> - - - -</option>
                    {
                        MODALIDAD.map(modalidad =>(
                        <option
                        key={modalidad.id}
                        value={modalidad.id}
                        >
                        {modalidad.nombre}
                        </option>  
                    ))
                }
                </Select>
            </SelectContenedor>

            <SelectContenedor>
                <label>Tipo Trabajo</label>
                <Select
                onChange={e => setCategory(e.target.value)}
                >   
                    <option value=""> - - - -</option>
                    {
                        TIPO_TRABAJO.map(tipo =>(
                        <option
                        key={tipo.id}
                        value={tipo.id}
                        >
                        {tipo.nombre}
                        </option>  
                    ))
                }
                </Select>
            </SelectContenedor>

            <SelectContenedor>
                <label>Ubicación</label>
                <Select
                onChange={e => setCategory(e.target.value)}
                >   
                    <option value=""> - - - -</option>
                    {   ESTADOS.map(estado =>(
                        <option
                        key={estado.id}
                        value={estado.id}
                        >
                        {estado.nombre}
                        </option>  
                    ))
                }
                </Select>
            </SelectContenedor>
        </ContenedorFiltros>
        </form>




        <ContenedorVacantes>
            { 
                vacantes.length ? 
                vacantes.map( vacante =>(
                <TarjetaVacanteSolicitante
                key={vacante.vacante_id}
                vacante={vacante}
                />
                ))
                : <p>NO HAY VACANTES DISPONIBLES ACTUALMENTE EN {category} </p>
                
            }

        </ContenedorVacantes>
        </SFform>
    </SLayout>
    )
}















