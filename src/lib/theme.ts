import { createTheme } from "@mui/material/styles";

const themeCustom = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: '"montserrat","Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default themeCustom;
