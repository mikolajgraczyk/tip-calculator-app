import styled, { css } from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledSelectTip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TipsSection = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${bpMobile}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  } ;
`;

export const TipButton = styled.button`
  padding: 6px 13px 6px 13px;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-family: "Space Mono";
  background: ${({ theme }) => theme.color.sherpaBlue};
  color: ${({ theme }) => theme.color.white};

  ${({ selected }) =>
    selected &&
    css`
      background: ${({ theme }) => theme.color.java};
    `}

  &:hover {
    background: ${({ theme }) => theme.color.java};
    color: ${({ theme }) => theme.color.sherpaBlue};
    cursor: pointer;
  }

  &:active {
    background: ${({ theme }) => theme.color.waterLeaf};
  }
`;

export const TipInput = styled.input`
  padding: 4px 11px 4px 11px;
  width: 100%;
  border: 2px ${({ theme }) => theme.color.whiteSqueeze} solid;
  border-radius: 5px;
  font-size: 24px;
  font-family: "Space Mono";
  background: ${({ theme }) => theme.color.whiteSqueeze};
  color: ${({ theme }) => theme.color.sherpaBlue};

  ${({ amount }) =>
    amount > 0 &&
    css`
      border: 2px ${({ theme }) => theme.color.java} solid;
    `}

  ${({ amount }) =>
    amount < 0 &&
    css`
      border: 2px ${({ theme }) => theme.color.terracotta} solid;
    `}

    ${({ amount }) =>
    amount === "0" &&
    css`
      border: 2px ${({ theme }) => theme.color.terracotta} solid;
    `}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.prettyShark};
  }
`;
