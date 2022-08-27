import styled from "styled-components";
import background from "../../assets/ilustration/new.jpg";
import { sizeQuery, v, btnReset } from "../../styles/variables";

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

export const SFoormTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
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