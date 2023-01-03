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
    margin-bottom: 3%;
    color: ${({ theme }) => theme.text};
    font-size: 25px;
    font-weight: 600;
`



export const Link = styled.link`
background-color: pink;
`




export const ContenedorPostulantes = styled.div`
/* background-color: lightgray; */
padding: 50px 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
/* margin-top: 30px; */
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
