import { StyledSelectTip, TipsSection, TipButton, TipInput } from "./styled";
import Title from "../title";
import { useDispatch } from "react-redux";
import { selectTip } from "../../calculatorSlice";

const SelectTip = () => {
  const dispatch = useDispatch();

  const setTip = (value) => {
    dispatch(selectTip(value));
  };


  return (
    <StyledSelectTip>
      <Title title="Select Tip %" />
      <TipsSection>
        <TipButton onClick={() => setTip(5)}>5%</TipButton>
        <TipButton onClick={() => setTip(10)}>10%</TipButton>
        <TipButton onClick={() => setTip(15)}>15%</TipButton>
        <TipButton onClick={() => setTip(25)}>25%</TipButton>
        <TipButton onClick={() => setTip(50)}>50%</TipButton>
        <TipInput
          type="number"
          placeholder="Custom"
          dir="rtl"
          onChange={({ target }) => setTip(target.value)}
        ></TipInput>
      </TipsSection>
    </StyledSelectTip>
  );
};

export default SelectTip;
