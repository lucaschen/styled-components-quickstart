import React from "react";
import styled from "styled-components";

import Article from "./Article";

const Heading = styled.h1`
  color: ${props => props.theme.regalBlue};
  text-align: center;
`;

const Root = () => {
  return (
    <div>
      <Heading>Hello World</Heading>
      <Article />
    </div>
  );
};

export default Root;
