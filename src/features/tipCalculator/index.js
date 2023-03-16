import { StyledTipCalculator } from "./styled";
import { ControlsSection } from "./controlsSection";
import { ResultSection } from "./resultSection";
import InputBill from "./controlsSection/inputBill";
import SelectTip from "./controlsSection/selectTip";
import InputPeople from "./controlsSection/inputPeople";
import ResultAmount from "./resultSection/resultAmount";
import ResetButton from "./resultSection/resetButton";

const TipCalculator = () => {
  return (
    <StyledTipCalculator>
      <ControlsSection>
        <InputBill />
        <SelectTip />
        <InputPeople />
      </ControlsSection>
      <ResultSection>
        <ResultAmount />
        <ResetButton />
      </ResultSection>
    </StyledTipCalculator>
  );
};

export default TipCalculator;
