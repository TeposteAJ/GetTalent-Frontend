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

export const SFoormTitle = styled.div`
    color: ${({ theme }) => theme.text};
    margin-bottom: 3%;
    font-size: 25px;
    font-weight: 600;
`


export const Link = styled.link`
background-color: pink;
`


export const ContenedorPostulaciones = styled.div`
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
