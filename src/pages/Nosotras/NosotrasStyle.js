import styled from "styled-components";

export const L3 =styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary};
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
  margin-left:18px;
  max-width:680px;
  letter-spacing: 2.5px;
  text-align: left;
  justify-content: left;
  align-items: left;
`
export const L6 =styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
  margin-left:18px;
  max-width:680px;
  letter-spacing: 2.5px;
  text-align: left;
  justify-content: left;
  align-items: left;
`
export const Espacio =styled.div`
  
  margin-top:30px;
  max-width:680px;
 
`
export const Grid3Layout = styled.div`
  display: -ms-grid;
  display: grid;
  margin-left:18px;
  padding: 14rem 2rem 2rem;
  width: 80%;
  //font-size: 25px;
  //font-weight: 60;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;


export const L5 =styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primary};
  line-height: 1;
  letter-spacing: 3px;
  padding: 2rem 90px 10px;
  margin-left:240px;
  max-width:900px;
  text-align: right;
  justify-content: right;
  align-items: right;
`

export const SFoormTitle = styled.div`
  margin-bottom: 13px;
  font-size: 40px;
  font-weight: 600;
  margin-left:13px;
  color: ${({ theme }) => theme.text};
  text-align: left;
`;

