import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.java};
  font-family: "Space Mono";
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.color.sherpaBlue};
  padding: 9px 40px 9px 37px;
  border: none;
  border-radius: 5px;
  margin-top: 97px;

  ${({disabled}) => disabled && css`
    background-color: ${({theme}) => theme.color.atoll};
    color: #00474b59;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 12px;
    padding: 9px 32px;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: ${({ theme }) => theme.color.waterLeaf};
  }
`;
