import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Top from "pages/Top";

function App() {
  const router = createBrowserRouter([
    {
      path: "/sample",
      element: <App />,
    },
    {
      path: "/",
      element: <Top />,
    },
  ]);

  // Check if the device is on dark mode
  const isDarkMode: boolean = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    // ThemeProvider is used to change the theme of the app
    <ThemeProvider theme={theme(isDarkMode)}>
      {/* CssBaseline is used to change the theme of the app */}
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
