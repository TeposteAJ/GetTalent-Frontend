import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";


export const SFoormTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: block;
  color: ${({ theme }) => theme.text};
`;

export const SFform = styled.form`
    width: 100%;
    background: ${({ theme }) => theme.bg2};
    border-radius: ${v.borderRadius};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`

export const SBbutton = styled.button`
    ${btnReset};
    width: 30%;
    background: ${({ theme }) => theme.bgSecondary};
    color: ${({ theme }) => theme.textSecondary};
    padding: ${v.smSpacing};
    display: flex;
    float: left;
    background-color: #173b5a;
    color: white;
    justify-content: center;
    border-radius: ${v.borderRadius};
    margin-top: ${v.mdSpacing};
    cursor: pointer;
`

export const SDdiv = styled.div`
    :first-of-type {
        margin-top: calc(${v.smSpacing} / 4);
    }
`

export const CajaError = styled.div`
    width: 60%;
    font-size: 20px;
    padding: ${v.smSpacing};
    border: 2px solid #ff0080;
    border-left:15px solid #ff0080;
    border-radius: ${v.borderRadius};
    font-weight: 40;
    background-color: pink;
    color: #ff0080;
    font-weight: bold; 
    margin-top: 10px;
    text-align:center;
    justify-content: center;
    align-items: center;
`

export const CajaExito = styled.div`
    width: 60%;
    font-size: 20px;
    padding: ${v.smSpacing};
    border: 2px solid green;
    border-left:15px solid green;
    border-radius: ${v.borderRadius};
    font-weight: 40;
    background-color:  #d3fdb2;
    color: #3e7b0f;
    font-weight: bold; 
    margin-top: 10px;
    text-align:center;
    justify-content: center;
    align-items: center;
`;



export const ContenedorInfoVacante = styled.div`
    /* background-color: gray; */
    margin: 20px;
    width: 800px;
    padding: 10px;
    color:${({ theme }) => theme.text};
`

export const ContenedorInfoDatos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding: 5px;
    color:${({ theme }) => theme.text};
`
export const Contenedor= styled.div`
    margin: 20px 0px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 5px;
    background-color:${({ theme }) => theme.bg};
`


export const ColumnaInfo= styled.div`
    /* width: 50%; */
    padding: 0px 5px;

`

export const ContenedorDescripcion = styled.div`
    margin: 10px 5px;
    padding: 5px;
    /* min-height: 150px; */
    /* border: 3px solid #6D8CB5;
    border-radius: 15px; */
`

export const ContenedorPostulacion = styled.div`
    margin: 10px 5px;
    padding: 5px;
`

export const ContenedorInfoBoton = styled.div`
    padding: 15px 10px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const BotonInfoVacante = styled.button`
    color: #fff;
    background-color: #173b5a;
    border: none;
    width: 25%;
    padding: 10px;
    transition: 0.2s background-color ease-out;
    font-size: 13px;
    border-radius: 1rem;
`


export const SpanInfo= styled.span`
    font-weight: bold;
`

export const P1 =styled.div`
  font-size: 25 px;
  margin-left: 30 px;
  color: ${({ theme }) => theme.text};
  /font-family: Helvetica, Arial, sans-serif;
  /line-height: 2.2;
  /letter-spacing: 6px;
  /max-width:680px;
  /text-align: left;
  /justify-content: left;
  /align-items: left;
  `