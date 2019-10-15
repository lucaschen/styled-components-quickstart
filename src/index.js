import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import Root from "./components/Root";
import * as theme from "./config/theme";

render(
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>,
  document.getElementById("app")
);
