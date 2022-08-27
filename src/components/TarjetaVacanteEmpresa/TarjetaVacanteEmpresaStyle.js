import styled from "styled-components";


export const ContenedorTarjeta = styled.div`
    margin: 10px 0px ;
    width: 700px;
    padding: 25px 15px;
    border: 3px solid #6D8CB5;
    border-radius: 15px;
`

export const ContenedorColumnasTarjeta = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* gap: 5px; */
`

export const ColumnaTarjeta = styled.div`
    width: 30%;
    padding: 0px 5px;

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
