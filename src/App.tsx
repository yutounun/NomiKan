import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Top from "pages/Top";
import TotalAmount from "pages/TotalAmount";
import AddMembers from "pages/AddMembers";
import InputPercentage from "pages/InputPercentage";

function App() {
  // Check if the device is on dark mode
  const isDarkMode: boolean = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    // ThemeProvider is used to change the theme of the app
    <ThemeProvider theme={theme(isDarkMode)}>
      {/* CssBaseline is used to change the theme of the app */}
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/total-amount" element={<TotalAmount />} />
          <Route path="/add-members" element={<AddMembers />} />
          <Route path="/input-percentage" element={<InputPercentage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
