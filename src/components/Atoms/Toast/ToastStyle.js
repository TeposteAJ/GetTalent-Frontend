import styled from "styled-components";

export const MessageWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.textWhite};
  background-color: ${({ color }) => color};
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.6) 0px 1px 4px 0px;
  text-align: center;
`;