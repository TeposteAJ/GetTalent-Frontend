import styled from "styled-components";

import { v ,sizeQuery} from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
    background-color:${({ theme }) => theme.bg2};
`;

export const SMain = styled.main`
    padding: calc(${v.smSpacing} * 5.3) ;
    h1 {
        font-size: 14px;
    }
`;

export const ContenedorGral  = styled.div`
    display: grid;
    min-width:20px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: ${sizeQuery.Tablet}) {
        width: 80%;
  }
`;
