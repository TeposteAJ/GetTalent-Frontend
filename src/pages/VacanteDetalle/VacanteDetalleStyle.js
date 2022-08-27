import styled from "styled-components";


export const ContenedorInfoVacante = styled.div`
    margin: 70px;
    width: 800px;
    padding: 15px;
`

export const ContenedorInfoDatos = styled.div`
    margin: 20px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding: 5px;
`

export const ColumnaInfo= styled.div`
    /* width: 50%; */
    padding: 0px 5px;

`

export const ContenedorDescripcion = styled.div`
    padding: 5px;
    min-height: 150px;
    border: 3px solid #6D8CB5;
    border-radius: 15px;
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
    width: 20%;
    padding: 10px;
    transition: 0.2s background-color ease-out;
    font-size: 13px;
    border-radius: 1rem;
`


export const SpanInfo= styled.span`
    font-weight: bold;
`