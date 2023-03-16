import { StyledInputBill, InputWrapper, Input } from "./styled";
import Title from "../title";
import { ReactComponent as DollarIcon } from "./images/DollarIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { insertBill, selectBillAmount } from "../../calculatorSlice";

const InputBill = () => {
  const dispatch = useDispatch();

  const billAmount = useSelector(selectBillAmount);

  const onInputChange = ({ target }) => {
    dispatch(insertBill(target.value));
  };

  return (
    <StyledInputBill>
      <Title title="Bill" amount={billAmount}/>
      <InputWrapper amount={billAmount}>
        <DollarIcon />
        <Input
          type="number"
          dir="rtl"
          lang="ar"
          value={billAmount}
          onChange={onInputChange}
          placeholder="0"
        ></Input>
      </InputWrapper>
    </StyledInputBill>
  );
};

export default InputBill;
