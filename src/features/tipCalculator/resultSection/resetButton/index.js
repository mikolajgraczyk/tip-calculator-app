import { useEffect } from "react";
import { Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { resetData, selectIsDataInsered } from "../../calculatorSlice";

const ResetButton = () => {
  const dispatch = useDispatch();
  const isDisabled = useSelector(selectIsDataInsered);

  return (
    <Button disabled={isDisabled} onClick={() => dispatch(resetData())}>
      RESET
    </Button>
  );
};

export default ResetButton;
