import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  background-color: ${props => props.theme.regalBlue};
  border: ${props => (props.noBorder ? "0" : "1px solid white")};
  color: white;
  padding: 0.25em 0.5em;
  transition: background-color 0.25s, color 0.25s;

  ${props => {
    switch (props.size) {
      case "small":
        return "font-size: 12px;";
      case "large":
        return "font-size: 20px;";
    }

    return "font-size: 16px;";
  }}

  ${props => {
    if (props.block) {
      return `
        display: block;
        width: 100%;
      `;
    }
  }}

  &:hover {
    background-color: white;
    color: ${props => props.theme.regalBlue};
    cursor: pointer;
  }
`;

export default Button;
