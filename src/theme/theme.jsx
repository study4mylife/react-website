import { createTheme } from "@mui/material/styles";
import { deepOrange, cyan } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Kanit, sans-serif",
  },
  palette: {
    primary: {
      main: "#181818",
      light: "#eeeeee",
      dark: "#000000",
      text: "#e0e0e0",
    },
    secondary: {
      main: deepOrange[400],
      light: deepOrange[200],
      lighter: deepOrange[100],
      dark: deepOrange[600],
      darker: deepOrange[800],
    },
    tertiary: {
      main: cyan[700],
      light: cyan[500],
      lighter: cyan[300],
      dark: cyan[800],
      darker: cyan[900],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Kanit, sans-serif",
        },
      },
    },
  },
});

export default theme;
