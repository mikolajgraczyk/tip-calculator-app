import { useState } from "react";
import { StyledInputBill, InputWrapper, Input } from "./styled";
import Title from "../title";
import { ReactComponent as DollarIcon } from "./images/DollarIcon.svg";

const InputBill = () => {
  const [billAmount, setBillAmount] = useState("");

  return (
    <StyledInputBill>
      <Title title="Bill" />
      <InputWrapper>
        <DollarIcon />
        <Input
          type="number"
          dir="rtl"
          value={billAmount}
          onChange={({ target }) => setBillAmount(target.value)}
        ></Input>
      </InputWrapper>
    </StyledInputBill>
  );
};

export default InputBill;
