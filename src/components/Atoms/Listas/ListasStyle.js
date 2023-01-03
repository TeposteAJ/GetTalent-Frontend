import styled from "styled-components";
import { sizeQuery, v } from "../../../styles/variables";

export const SLlabel = styled.label`
  margin: 1em;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: calc(${v.smSpacing} / 4);
  @media screen and (max-width: ${sizeQuery.LaptopL}) {
    width: 70%;
  }
`;

export const SLSelect = styled.select`
     outline: none;
     border: 1px solid ${({ theme }) => theme.textFade};
     @media screen and (max-width: ${sizeQuery.LaptopL}) {
      width: 100%;
     }
     padding: ${v.smSpacing};
     font-size: 15px;
     border-radius: ${v.borderRadius};
     background-color: White;
     cursor: pointer; 
     display: flex;
    
     option {
      background: #d8dfff;
      color: black;
      display: flex;
      white-space: pre;
      min-height: 30px;
      padding: 0px 2px 1px;
      
    }
    

`;
// /*style items (options):*/
// .select-items {
//     position: absolute;
//     background-color: pink;
//     top: 100%;
//     left: 0;
//     right: 0;
//     z-index: 99;
//   }