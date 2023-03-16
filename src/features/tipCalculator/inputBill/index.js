import {
  StyledInputBill,
  InputWrapper,
  Input,
} from "./styled";
import Title from "../title";
import { ReactComponent as DollarIcon } from "./images/DollarIcon.svg";

const InputBill = () => {
  return (
    <StyledInputBill>
      <Title title="Bill" />
      <InputWrapper>
        <DollarIcon />
        <Input type="number" dir="rtl"></Input>
      </InputWrapper>
    </StyledInputBill>
  );
};

export default InputBill;
