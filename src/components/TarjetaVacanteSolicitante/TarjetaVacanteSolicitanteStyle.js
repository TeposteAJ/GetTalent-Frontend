import styled from "styled-components";


export const TarjetaVacante = styled.div`
    margin: 10px 0px ;
    width: 700px;
    padding: 15px;
    border: 3px solid #6D8CB5;
    border-radius: 15px;
`

export const Columnas = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr ;
    gap: 10px;
`

export const Columna= styled.div`
    /* width: 50%; */
    padding: 0px 5px;

`

export const ContenedorBoton = styled.div`
    padding: 5px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const BotonVacante = styled.button`
    color: #fff;
    background-color: #173b5a;
    border: none;
    width: 15%;
    padding: 5px 10px;
    transition: 0.2s background-color ease-out;
    font-size: 12px;
    border-radius: 1rem;
`


export const Span= styled.span`
    font-weight: bold;
`
