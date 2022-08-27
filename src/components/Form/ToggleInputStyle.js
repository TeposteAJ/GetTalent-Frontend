import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputPassword = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.textFade};
  width: 100%;
  padding: ${v.smSpacing};
  font-size: 15px;
  border-radius: ${v.borderRadius};
`;

export const ButtonPassword = styled.button`
  /* ${btnReset};0 */
  width: 2em;
  box-sizing: content-box;
  border-radius: 0.8em;
  cursor: pointer;
  padding: ${v.smSpacing};
  justify-content: center;
`;