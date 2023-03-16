import styled from "styled-components";

export const StyledResultAmount = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const Amount = styled.span`
  font-size: 48px;
  line-height: 71px;
  color: ${({ theme }) => theme.color.java};
  justify-self: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 32px;
    line-height: 47px;
  }
`;
