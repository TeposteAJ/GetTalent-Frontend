import styled from "styled-components";
import { sizeQuery } from "../../styles/variables";


export const TarjetaVacante = styled.div`
    background-color: #fff;
    margin: 10px 0px ;
    width: 750px;
    @media screen and (max-width: ${sizeQuery.LaptopL}) {
        width: 100%;
       }
    padding: 15px;
    border: 3px solid #6D8CB5;
    border-radius: 15px;
    background-color:${({ theme }) => theme.bg};
`

export const Columnas = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1.2fr 1fr ;
    gap: 10px;
`


export const ContenedorBoton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BotonVacante = styled.button`
    color: #fff;
    text-decoration: none;
    background-color: #173b5a;
    border: none;
    width: 80%;
    padding: 8px 10px;
    transition: 0.2s background-color ease-out;
    font-size: 13px;
    border-radius: 1rem;
`

export const LinkBoton = styled.link`
    color: #fff;
    text-decoration: none;
`


export const Span= styled.span`
    font-weight: bold;
`
