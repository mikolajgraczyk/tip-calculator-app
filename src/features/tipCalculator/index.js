import { StyledTipCalculator, ControlsSection } from "./styled";
import InputBill from "./inputBill";
import SelectTip from "./selectTip";
import InputPeople from "./inputPeople";

const TipCalculator = () => {
  return (
    <StyledTipCalculator>
      <ControlsSection>
        <InputBill />
        <SelectTip />
        <InputPeople />
      </ControlsSection>
    </StyledTipCalculator>
  );
};

export default TipCalculator;
