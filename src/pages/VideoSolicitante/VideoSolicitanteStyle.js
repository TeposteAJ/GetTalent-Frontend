import styled from "styled-components";
import { sizeQuery } from "../../styles/variables";
import { btnReset, v } from "../../styles/variables";

export const PrLayout = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg2};
  border-radius: ${v.borderRadius};
  display: flex;
  height: auto,
  width: auto,
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const GridLayout = styled.div`
  display: grid;
  width: 100%;
  font-size: 25px;
  font-weight: 60;
  grid-template-columns: 1fr ;
`;

export const SFoormTitle = styled.div`
  margin-bottom: 3%;
  font-size: 25px;
  font-weight: 600;
`;

export const SLlaabel = styled.label`
  min-width: 320px;
  display: block;
  font-size: 15px;
  font-weight: 600;
  margin-left: 0px;
  margin-bottom: calc(${v.smSpacing} / 1);
  /* se creo una condicional donde si quieres que el texto de SLlabel ocupe otra 
     direccion puedas colocarselo con el custom prop alignText, sino existe ese prop
     por default la orientacion del texto sera a la izquierda */
  text-align: ${(props) => (props.alignText ? props.alignText : "left")};
  inline-size: min-content;
  @media screen and (max-width: ${sizeQuery.LaptopL}) {
    width: 70%;
  }
`;
export const SLlabel = styled.label`
  min-width: 320px;
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-left: 0px;
  margin-bottom: calc(${v.smSpacing} / 1);
  /* se creo una condicional donde si quieres que el texto de SLlabel ocupe otra 
     direccion puedas colocarselo con el custom prop alignText, sino existe ese prop
     por default la orientacion del texto sera a la izquierda */
  text-align: ${(props) => (props.alignText ? props.alignText : "center")};
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
export const SFform = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.bg2};
  border-radius: ${v.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
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
`;
export const Link = styled.link`
background-color: pink;
`;
export const SDdiv = styled.div`
  :first-of-type {
    margin-top: calc(${v.smSpacing} / 4);
  }
`;
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
`;
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