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
    width: 90%;
  }
`;




export const SLSelect = styled.select`
     
     width: 100%;
     font-size: 15px;
     padding: 14 px;
     border-radius: ${v.borderRadius};
     margin-bottom: calc(${v.smSpacing} / 4)
     display: flex;
     flex-direction: column;
     background-color: White;
     border: 2px solid black;
     border-color: black;
     cursor: pointer; 
     
     option {
      background: #d9e9f7bd;
      color: black;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
    }
    
    &.Select-items div:hover, .same-as-selected {
      background-color: pink;
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