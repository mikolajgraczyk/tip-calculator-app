import styled from "styled-components";

export const StyledTipCalculator = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 32px 32px 32px 48px;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px;
  display: flex;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
    gap: 32px;
    padding: 32px 24px 32px 24px;
    border-radius: 25px 25px 0 0;
  }
`;
