import { createTheme } from "@mui/material/styles";

const theme = (isDarkMode: boolean) => {
  const originalTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#00ff62",
      },
      secondary: {
        main: "#a600ff",
      },
    },
  });
  return originalTheme;
};

export default theme;
