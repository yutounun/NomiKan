import { createTheme } from "@mui/material/styles";

const theme = (isDarkMode: boolean) => {
  const originalTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#d500ff",
      },
      secondary: {
        main: "#0f0",
      },
      info: {
        main: "#8f8f8f",
      },
    },
    // With typography components,
    // the styles following will be applied to the selected element.
    typography: {
      // Header
      h1: {
        fontSize: "1.2em",
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: 18,
      },
      subtitle2: {
        fontSize: 16,
      },
      // Main content
      body1: {
        fontSize: 18,
      },
      body2: {
        fontSize: 12,
      },
    },
  });
  return originalTheme;
};

export default theme;
