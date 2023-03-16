import { StyledTitle, TitleContent, IncorrectNumberInfo } from "./styled";

const Title = ({ title, amount }) => (
  <StyledTitle>
    <TitleContent>{title}</TitleContent>
    <IncorrectNumberInfo amount={amount}>
      {amount === "0" ? "Can't be zero" : "Can't be less than 0"}
    </IncorrectNumberInfo>
  </StyledTitle>
);

export default Title;
