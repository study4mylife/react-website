import { createTheme } from "@mui/material/styles";
import{deepOrange} from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: "Kanit, sans-serif"
  },
  palette: {
    primary: {
      main: "#151515",
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
  },
});

export default theme;