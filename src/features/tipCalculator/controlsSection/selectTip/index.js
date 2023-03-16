import { StyledSelectTip, TipsSection, TipButton, TipInput } from "./styled";
import Title from "../title";
import { useDispatch, useSelector } from "react-redux";
import { selectTip, selectSelectedTip } from "../../calculatorSlice";

const SelectTip = () => {
  const dispatch = useDispatch();
  const selectedTip = useSelector(selectSelectedTip);

  const setTip = (value) => {
    dispatch(selectTip(value));
  };

  const checkIfSelected = (value) => {
    return selectedTip === value;
  };

  return (
    <StyledSelectTip>
      <Title title="Select Tip %" />
      <TipsSection>
        <TipButton selected={checkIfSelected(5)} onClick={() => setTip(5)}>
          5%
        </TipButton>
        <TipButton selected={checkIfSelected(10)} onClick={() => setTip(10)}>
          10%
        </TipButton>
        <TipButton selected={checkIfSelected(15)} onClick={() => setTip(15)}>
          15%
        </TipButton>
        <TipButton selected={checkIfSelected(25)} onClick={() => setTip(25)}>
          25%
        </TipButton>
        <TipButton selected={checkIfSelected(50)} onClick={() => setTip(50)}>
          50%
        </TipButton>
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
