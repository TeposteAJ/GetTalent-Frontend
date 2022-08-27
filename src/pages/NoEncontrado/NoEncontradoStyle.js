import styled from "styled-components";
import background from "../../assets/ilustration/404.jpg";
import { sizeQuery, v } from "../../styles/variables";

export const SFixedContainer = styled.div`
  /* Esta es una forma mas rapida de maquetar la vista de login, usando grid layout */
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr minmax(10px, 60%);

  @media screen and (max-width: ${sizeQuery.Tablet}) {
    /* Cuando la vista sea menor que 768 todo se apila en columnas */
    grid-template-columns: 1fr;
  }
`;

export const SIimg = styled.div`
  /*En vez de insertar la imagen por fuera, mejor agregarlo como background para que se acomode solo  */
  background-image: url(${background});
  background-color: #cccccc;
  background-size: 100%;

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
  font-size: 40px;
  font-weight: 600;
`;
