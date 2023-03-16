import { StyledSelectTip, TipsSection, TipButton, TipInput } from "./styled";
import Title from "../title";

const SelectTip = () => {
  return (
    <StyledSelectTip>
      <Title title="Select Tip %" />
      <TipsSection>
        <TipButton>5%</TipButton>
        <TipButton>10%</TipButton>
        <TipButton>15%</TipButton>
        <TipButton>25%</TipButton>
        <TipButton>50%</TipButton>
        <TipInput type="number" placeholder="Custom" dir="rtl"></TipInput>
      </TipsSection>
    </StyledSelectTip>
  );
};

export default SelectTip;
