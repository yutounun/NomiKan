import React from "react";

import "./Top.scss";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";

import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Buttons from "components/Top/Organisms/Buttons";
import Explanation from "components/Top/Organisms/Explanation";

function Top() {
  // Check if the device is on dark mode
  const isDarkMode: boolean = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={theme(isDarkMode)}>
      <CssBaseline />
      <BaseLayout>
        <div className="wrapper">
          <MyHeader value="NomiKan" />
          <div className="container">
            <Explanation />
            <Buttons />
          </div>
        </div>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default Top;
