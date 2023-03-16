import styled from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledTipCalculator = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 32px 32px 32px 48px;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px;

  @media (max-width: ${bpMobile}px) {
    gap: 32px;
    padding: 32px 24px 32px 24px;

    border-radius: 25px 25px 0 0;
  }
`;

export const ControlsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  max-width: 379px;
  gap: 40px;

  @media (max-width: ${bpMobile}px) {
    gap: 32px;
  }
`;
