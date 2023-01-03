import styled from "styled-components";
import { sizeQuery } from "../../styles/variables";
import { btnReset, v } from "../../styles/variables";

export const T1 =styled.div`
  //font-size: 1.3rem;
  color: ${({ theme }) => theme.text2};
  /font-family: Helvetica, Arial, sans-serif;
  /line-height: 2.2;
  /letter-spacing: 6px;
  /max-width:680px;
  margin-left:12px;
  text-align: left;
  justify-content: left;
  align-items: left;
  `

export const L1 =styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary};
  font-family: Helvetica, Arial, sans-serif;
  line-height: 2.2;
  letter-spacing: 6px;
  max-width:680px;
  margin-left:18px;
  text-align: left;
  justify-content: left;
  align-items: left;
`
export const L2 =styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary};
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.8;
  letter-spacing: 4.5px;
  margin-left:18px;
  max-width:680px;
  text-align: left;
  justify-content: left;
  align-items: left;
`
export const L3 =styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary};
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
  margin-left:18px;
  max-width:680px;
  letter-spacing: 2.5px;
  text-align: left;
  justify-content: left;
  align-items: left;
`

export const L4 =styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primary};
  line-height: 2;
  margin-left:15px;
  margin-top:33px;
  letter-spacing: 3.5px;
  text-align: left;
  justify-content: left;
  align-items: left;
`
export const L5 =styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primary};
  line-height: 1;
  letter-spacing: 3px;
  padding: 2rem 50px 10px;
  max-width:900px;
  text-align: right;
  justify-content: right;
  align-items: right;
`
export const H0 =styled.div`
  font-size: 0.1rem;
  color: ${({ theme }) => theme.text2};
  line-height: 1;
  height: 7rem;
  //padding: 3rem;
  letter-spacing: 1.5px;
  margin-left:18px;
  min-width:1150px;
  min-height:20px;
  text-align: center;
  justify-content: center;
  align-items: center;
`
export const H1 =styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text2};
  padding: 2rem 300px 10px;
  
  letter-spacing: 1.5px;
  margin-left:18px;
  max-width:1100px;
  text-align: center;
  justify-content: center;
  align-items: center;
`
export const H2 =styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 3px;
  margin-left:19px;
  max-width:1100px;
  text-align: center;
  justify-content: center;
  align-items: center;
`
export const Contenedor= styled.div`
    margin: 20px 0px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  
    //background-color:${({ theme }) => theme.bg};
`

export const SFixedContainer = styled.div`
  /* Esta es una forma mas rapida de maquetar la vista de login, usando grid layout */
  display: grid;
  width: 100%;
  height: 300vh;
  z-index: -1;

`;

export const SFform = styled.form`
  width: 60%;
  background: ${({ theme }) => theme.bg2};
  border-radius: ${v.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
 
`;

export const GridLayout = styled.div`
  display: grid;
  width: 100%;
  font-size: 25px;
  font-weight: 60;
  grid-template-columns: 1fr 1fr;
`;

export const SSLayout = styled.div`
  display: grid;
  width: 100%;
  font-size: 25px;
  font-weight: 60;
  grid-template-columns: 1fr;
`;

export const SFoormTitle = styled.div`
  margin-bottom: 13px;
  font-size: 40px;
  font-weight: 600;
  margin-left:13px;
  color: ${({ theme }) => theme.text};
  text-align: left;
`;

export const SLlaabel = styled.label`
  min-width: 320px;
  display: block;
  font-size: 11px;
  font-weight: 600;
  margin-left: 0px;
  column-count: auto;
  margin-bottom: calc(${v.smSpacing} / 4);
  /* se creo una condicional donde si quieres que el texto de SLlabel ocupe otra 
     direccion puedas colocarselo con el custom prop alignText, sino existe ese prop
     por default la orientacion del texto sera a la izquierda */
  text-align: ${(props) => (props.alignText ? props.alignText : "left")};
  inline-size: min-content;
  @media screen and (max-width: ${sizeQuery.LaptopL}) {
    width: 70%;
  }
`;
export const SIinput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.textFade};
  width: 100%;
  padding: ${v.smSpacing};
  font-size: 15px;
  border-radius: ${v.borderRadius};
`;

export const SDdiv = styled.div`
  :first-of-type {
    margin-top: ${v.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${v.smSpacing};
  }
`;
export const SBbutton = styled.button`
  ${btnReset};
  width: 20%;
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
`;
export const Link = styled.link`
background-color: pink;
`;
