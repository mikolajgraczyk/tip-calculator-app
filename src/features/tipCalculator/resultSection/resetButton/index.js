import { Button } from "./styled";
import { useDispatch } from "react-redux";
import { resetData } from "../../calculatorSlice";

const ResetButton = () => {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(resetData())}>RESET</Button>;
};

export default ResetButton;
