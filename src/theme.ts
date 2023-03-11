import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    // eslint-disable-next-line @typescript-eslint/ban-types
    myFontSize: Object;
  }
  interface ThemeOptions {
    // eslint-disable-next-line @typescript-eslint/ban-types
    myFontSize: Object;
  }
}
interface Theme {
  // eslint-disable-next-line @typescript-eslint/ban-types
  myFontSize: Object;
}

const theme = (isDarkMode: boolean) => {
  const originalTheme: Theme = createTheme({
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
    myFontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
  });
  return originalTheme;
};

export default theme;
