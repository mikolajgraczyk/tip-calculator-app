import { StyledInputPeople, InputWrapper, Input } from "./styled";
import Title from "../title";
import { ReactComponent as PersonIcon } from "./images/PersonIcon.svg";

const InputPeople = () => {
  return (
    <StyledInputPeople>
      <Title title="Number of People" />
      <InputWrapper>
        <PersonIcon />
        <Input type="number" dir="rtl"></Input>
      </InputWrapper>
    </StyledInputPeople>
  );
};

export default InputPeople;
