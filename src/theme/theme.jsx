import { createTheme } from "@mui/material/styles";
import{deepOrange} from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: "Kanit, sans-serif"
  },
  palette: {
    primary: {
      main: "#151515",
      text: "#e0e0e0",
    },
    secondary: {
      main: deepOrange[400]
    },
  },
});

export default theme;