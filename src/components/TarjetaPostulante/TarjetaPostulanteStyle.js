import styled from "styled-components";


export const ContenedorTarjeta = styled.div`
    margin: 10px 0px ;
    width: 750px;
    padding: 25px 15px;
    border: 3px solid #6D8CB5;
    border-radius: 15px;
    color: ${({ theme }) => theme.text};
    background-color:${({ theme }) => theme.bg};
`

export const ContenedorColumnasTarjeta = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 10px;
`

export const ColumnaTarjeta = styled.div`
    padding: 0px 5px;

`

export const SpanInfo= styled.span`
    font-weight: bold;
`