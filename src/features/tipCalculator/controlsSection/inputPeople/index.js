import {
  StyledInputPeople,
  InputWrapper,
  Input,
  IncorrectNumberInfo,
} from "./styled";
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
      <Title title="Number of People" amount={peopleAmount} />
      <InputWrapper amount={peopleAmount}>
        <PersonIcon />
        <Input
          type="number"
          dir="rtl"
          lang="ar"
          value={peopleAmount}
          onChange={onInputChange}
          placeholder="0"
        />
      </InputWrapper>
    </StyledInputPeople>
  );
};

export default InputPeople;
