import styled from "styled-components";
import { sizeQuery, v } from "../../../styles/variables";

export const SLlabel = styled.label`
  margin: 1em;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: calc(${v.smSpacing} / 4);
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
