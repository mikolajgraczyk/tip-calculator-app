import { StyledResultAmount, Amount } from "./styled";
import ResultInfo from "./resultInfo";
import { useSelector } from "react-redux";
import { selectCalculatedTipAmount, selectTipAmountPerPerson } from "../../calculatorSlice";

const ResultAmount = () => {
  const calculatedTip = useSelector(selectCalculatedTipAmount);
  const calculatedTipPerPerson = useSelector(selectTipAmountPerPerson);

  return (
    <>
      <StyledResultAmount>
        <ResultInfo title="Tip Amount" />
        <Amount>${calculatedTip.toFixed(2)}</Amount>
      </StyledResultAmount>
      <StyledResultAmount>
        <ResultInfo title="Total" />
        <Amount>${calculatedTipPerPerson ? calculatedTipPerPerson.toFixed(2) : "0.00"}</Amount>
      </StyledResultAmount>
    </>
  );
};

export default ResultAmount;
