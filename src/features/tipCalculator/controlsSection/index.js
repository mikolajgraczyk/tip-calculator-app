import styled from "styled-components";

export const ControlsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  max-width: 379px;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 32px;
    max-width: 100%;
  }
`;
