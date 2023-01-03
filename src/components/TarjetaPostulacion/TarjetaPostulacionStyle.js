import styled from "styled-components";


export const ContenedorPostulacionCard = styled.div`
    background: ${({ theme }) => theme.bg2};
    margin: 10px 0px ;
    width: 800px;
    padding: 15px;
    border: 4px solid #6D8CB5;
    border-radius: 15px;
`

export const Columnas = styled.div`
    display: grid;
    grid-template-columns: 3fr 1.2fr 1fr ;
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
    text-decoration: none;
    background-color: #173b5a;
    border: none;
    width: 20%;
    padding: 8px 10px;
    transition: 0.2s background-color ease-out;
    font-size: 13px;
    border-radius: 1rem;
`


export const Span= styled.span`
    font-weight: bold;
`
