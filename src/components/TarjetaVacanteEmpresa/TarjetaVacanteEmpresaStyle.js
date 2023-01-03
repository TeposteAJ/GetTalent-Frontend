import styled from "styled-components";
import { sizeQuery } from "../../styles/variables";


export const ContenedorTarjeta = styled.div`
    margin: 10px 0px ;
    width: 700px;
    @media screen and (max-width: ${sizeQuery.LaptopL}) {
        width: 100%;
        }
    padding: 25px 15px;
    border: 3px solid #6D8CB5;
    border-radius: 15px;
    background-color:${({ theme }) => theme.bg};
`

export const ContenedorColumnasTarjeta = styled.div`
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: 2fr 1fr 1fr .5fr;
    gap: 5px; 
`

export const ColumnaTarjeta = styled.div`
    /* min-width: 250px;
    @media screen and (max-width: ${sizeQuery.LaptopL}) {
        width: 30%;
    }
    padding: 0px 5px; */

`

export const ColumnaBoton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

`

export const BotonTarjeta = styled.button`
    color: #fff;
    background-color: #173b5a;
    border: none;
    padding: 5px 12px;
    transition: 0.2s background-color ease-out;
    font-size: 12px;
    border-radius: 1rem;
`
export const SpanInfo= styled.span`
    font-weight: bold;
`