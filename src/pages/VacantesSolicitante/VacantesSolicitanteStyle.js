import styled from "styled-components";
// import { sizeQuery } from "../../styles/variables";
import { /* btnReset, */ v } from "../../styles/variables";

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

// export const SFoormTitle = styled.div`
//     margin-bottom: 3%;
//     font-size: 25px;
//     font-weight: 600;
// `


export const Link = styled.link`
color: pink;
`

export const ContenedorVacantes = styled.div`
/* background-color: lightgray; */
color: ${({ theme }) => theme.text};
padding: 50px 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
/* margin-top: 30px; */
`

export const ContenedorFiltros = styled.div`
margin-top: 50px;
width: 750px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
gap: .5rem;
`

export const Select = styled.select`
width: 100%;
padding: 5px;
`

export const SelectContenedor = styled.div`
font-size: 14px;
font-weight: bold;
`
export const SFoormTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: block;
  color: ${({ theme }) => theme.text};
`;

