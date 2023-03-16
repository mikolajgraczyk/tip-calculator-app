import { StyledResultAmount, Amount } from "./styled";
import ResultInfo from "./resultInfo";

const ResultAmount = () => {
  return (
    <>
      <StyledResultAmount>
        <ResultInfo title="Tip Amount" />
        <Amount>$0.00</Amount>
      </StyledResultAmount>
      <StyledResultAmount>
        <ResultInfo title="Total" />
        <Amount>$0.00</Amount>
      </StyledResultAmount>
    </>
  );
};

export default ResultAmount;
