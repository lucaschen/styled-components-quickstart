import React from "react";
import styled from "styled-components";

import Button from "#components/shared/Button";

const MainContent = styled.div`
  background-color: ${props => props.theme.regalBlue};
  color: white;
  flex: 1;
  padding: 10px;
`;

const Sidebar = styled.div`
  background-color: ${props => props.theme.dimGray};
  color: white;
  flex: 0 auto;
  padding: 10px;
  width: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Article = () => {
  return (
    <Wrapper>
      <MainContent>
        <p>Main Content</p>
        <p>
          <Button size="small">Click Me!</Button>
          <Button>Click Me!</Button>
          <Button size="large">Click Me!</Button>
        </p>
        <Button block>Click Me!</Button>
        <Button block noBorder>
          Click Me!
        </Button>
      </MainContent>
      <Sidebar>Sidebar</Sidebar>
    </Wrapper>
  );
};

export default Article;
