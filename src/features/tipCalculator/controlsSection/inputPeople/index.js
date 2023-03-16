import { useState } from "react";
import { StyledInputPeople, InputWrapper, Input } from "./styled";
import Title from "../title";
import { ReactComponent as PersonIcon } from "./images/PersonIcon.svg";

const InputPeople = () => {
  const [peopleAmount, setPeopleAmount] = useState("");

  return (
    <StyledInputPeople>
      <Title title="Number of People" />
      <InputWrapper>
        <PersonIcon />
        <Input
          type="number"
          dir="rtl"
          value={peopleAmount}
          onChange={({ target }) => setPeopleAmount(target.value)}
        ></Input>
      </InputWrapper>
    </StyledInputPeople>
  );
};

export default InputPeople;
