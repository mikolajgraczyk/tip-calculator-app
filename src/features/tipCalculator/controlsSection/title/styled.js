import styled, { css } from "styled-components";

const bpMobile = ({theme}) => theme.breakpoint.mobile;

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContent = styled.span`
  color: ${({ theme }) => theme.color.cuttySark};
`;

export const IncorrectNumberInfo = styled.span`
  display: none;
  color: ${({ theme }) => theme.color.terracotta};

  ${({ amount }) =>
    amount == "0" &&
    css`
      display: inline;
    `}

  ${({ amount }) =>
    amount < 0 &&
    css`
      display: inline;

      @media(max-width: ${bpMobile}px){
        font-size: 13px;
      }
    `}
`;
