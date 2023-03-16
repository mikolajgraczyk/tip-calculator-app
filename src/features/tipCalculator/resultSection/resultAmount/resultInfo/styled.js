import styled from "styled-components";

export const StyledResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.white};
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.color.grannySmith};
  font-size: 13px;
`;
