import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";
import { sizeQuery } from "../../styles/variables";
import background from "../../assets/ilustration/new.jpg";

export const SFoormTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
`;
export const SLlabel = styled.label`
  min-width: 320px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
  margin-left: 0px;
  margin-bottom: calc(${v.smSpacing} / 4);
  @media screen and (max-width: ${sizeQuery.LaptopL}) {
    width: 70%;
  }
`;
export const SLlaabel = styled.label`
  min-width: 320px;
  display: block;
  font-size: 11px;
  font-weight: 600;
  margin-left: 0px;
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
export const SBbutton = styled.button`
  ${btnReset};
  width: 50%;
  background: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textSecondary};
  padding: ${v.smSpacing};
  display: flex;
  float: center;
  background-color: #173b5a;
  color: white;
  justify-content: center;
  border-radius: ${v.borderRadius};
  margin-top: ${v.mdSpacing};
  cursor: pointer;
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
export const SBbuutton = styled.button`
  /* ${btnReset};0 */
  width: 2em;
  margin-top: 1em;
  padding: 1em;
  box-sizing: content-box;
  border-radius: 0.8em;
  cursor: pointer;
  padding: ${v.smSpacing};
  justify-content: center;
  /* width: 100%;
background: ${({ theme }) => theme.bgSecondary};
color: ${({ theme }) => theme.textSecondary};
padding: ${v.smSpacing};
display: flex;
background-color: pink;
color:blue;
cursor: pointer; */
`;
// export const SFormTitle = styled.span`
//     font-size: 24px;
//     font-weight: 600;
// `;
export const SDdiv = styled.div`
  :first-of-type {
    margin-top: ${v.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${v.smSpacing};
  }
`;
export const SIimg = styled.div`
  /*En vez de insertar la imagen por fuera, mejor agregarlo como background para que se acomode solo  */
  background-image: url(${background});
  background-color: #cccccc;
  background-size: contain;
  @media screen and (max-width: ${sizeQuery.Tablet}) {
    /* Cuando la vista sea menor que 768 la imagen desaparece, no se necesita en tablet o mobile */
    display: none;
  }
`;
export const SFixedContainer = styled.div`
  /* Esta es una forma mas rapida de maquetar la vista de login, usando grid layout */
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr minmax(320px, 40%);
  @media screen and (max-width: ${sizeQuery.Tablet}) {
    /* Cuando la vista sea menor que 768 todo se apila en columnas */
    grid-template-columns: 1fr;
  }
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