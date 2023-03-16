import { StyledResultInfo, Title, Subtitle } from "./styled";

const ResultInfo = ({ title }) => (
  <StyledResultInfo>
    <Title>{title}</Title>
    <Subtitle>/ person</Subtitle>
  </StyledResultInfo>
);

export default ResultInfo;
