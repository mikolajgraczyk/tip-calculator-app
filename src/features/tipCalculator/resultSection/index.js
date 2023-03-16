import styled from "styled-components";

export const ResultSection = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme.color.sherpaBlue};
  border-radius: 15px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  height: 417px;
  width: calc(413px);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
    height: 257px;
    padding: 37px 22px 24px 24px;
    gap: 20px;
  }
`;
