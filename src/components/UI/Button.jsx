import styled from "styled-components";

const Button = ({ children, variant = "contained", ...restProps }) => {
  return (
    <StyledButton variant={variant} {...restProps}>
      {" "}
      {children}
    </StyledButton>
  );
};

export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "rgb(126, 42, 10)" : "#fff";
};
const getBorder = (props) => {
  return props.variant === "contained"
    ? "none"
    : " 1px solid #8A2B06; color:#8A2B06 ";
};

const StyledButton = styled.button`
  background: ${getBackgroundColor};
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: white;
  margin: 0;
  border: ${getBorder};
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #2c0d00;
    color: #ffffff;
  }
  :active {
    background-color: #993108;
  }
`;
