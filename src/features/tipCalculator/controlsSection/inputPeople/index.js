import { StyledInputPeople, InputWrapper, Input } from "./styled";
import Title from "../title";
import { ReactComponent as PersonIcon } from "./images/PersonIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { insertPeopleAmount, selectPeopleAmount } from "../../calculatorSlice";

const InputPeople = () => {
  const dispatch = useDispatch();

  const peopleAmount = useSelector(selectPeopleAmount);

  const onInputChange = ({ target }) => {
    dispatch(insertPeopleAmount(target.value));
  };

  return (
    <StyledInputPeople>
      <Title title="Number of People" />
      <InputWrapper>
        <PersonIcon />
        <Input
          type="number"
          dir="rtl"
          value={peopleAmount}
          onChange={onInputChange}
        ></Input>
      </InputWrapper>
    </StyledInputPeople>
  );
};

export default InputPeople;
