import styled, { css } from "styled-components";

export const StyledInputPeople = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.whiteSqueeze};
  padding: 0 15px 0 17px;
  border-radius: 5px;
  border: 2px ${({ theme }) => theme.color.whiteSqueeze} solid;

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
     amount  === "0" &&
    css`
      border: 2px ${({ theme }) => theme.color.terracotta} solid;
    `}
`;

export const Input = styled.input`
  border: none;
  background: ${({ theme }) => theme.color.whiteSqueeze};
  font-size: 24px;
  font-family: "Space Mono";
  color: ${({ theme }) => theme.color.sherpaBlue};
  padding: 4px 0 4px 0;
  width: 100%;

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
`;
