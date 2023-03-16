import { StyledResultAmount, Amount } from "./styled";
import ResultInfo from "./resultInfo";
import { useSelector } from "react-redux";
import { selectCalculateTipAmount } from "../../calculatorSlice";

const ResultAmount = () => {
  const calculatedTipAmount = useSelector(selectCalculateTipAmount);

  return (
    <>
      <StyledResultAmount>
        <ResultInfo title="Tip Amount" />
        <Amount>${calculatedTipAmount.toFixed(2)}</Amount>
      </StyledResultAmount>
      <StyledResultAmount>
        <ResultInfo title="Total" />
        <Amount>$0.00</Amount>
      </StyledResultAmount>
    </>
  );
};

export default ResultAmount;
