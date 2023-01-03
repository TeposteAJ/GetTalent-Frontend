import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v, sizeQuery } from "../../styles/variables";

export const SForm = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.bg2};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
  border: solid 1px red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const SFormTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`;

export const SFormControl = styled.div`
    :first-of-type {
        margin-top: ${v.mdSpacing};
    }
    :not(:last-of-type) {
        margin-bottom: ${v.smSpacing};
    }
    
    @media screen and (min-width: ${sizeQuery.LaptopL}) {
    width: 70%;
  }
`;

export const SLabel = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-left: 4px;
    margin-bottom: calc(${v.smSpacing} / 4);
`;

export const SInput = styled.input`
    outline: none;
    border: 1px solid ${({ theme }) => theme.textFade};
    width: 100%;
    padding: ${v.smSpacing};
    font-size: 18px;
    border-radius: ${v.borderRadius};
`;

export const SButton = styled.button`
    ${btnReset};
    width: 60%;
    background: ${({ theme }) => theme.bgSecondary};
    color: ${({ theme }) => theme.textSecondary};
    padding: ${v.smSpacing};
    display: flex;
    background-color: #173B5A;
    color:white;
    margin-left: 3em;
    justify-content: center;
    border-radius: ${v.borderRadius};
    margin-top: ${v.mdSpacing};
    cursor: pointer;
`;

export const SRedirect = styled.div`
    font-size: 11px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${v.smSpacing};
`;
export const SRedirectLabel = styled.span`
    color: ${({ theme }) => theme.text2};
`;

export const SRedirectLink = styled(Link)`
    color: ${({ theme }) => theme.primary};
`;


// ------------ estilos del registro-----------
