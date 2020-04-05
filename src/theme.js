import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      light: "#757de8",
      dark: "#002984",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fb8c00",
      light: "#ffbd45",
      dark: "#c25e00",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Roboto"].join(","),
    body1: {
      fontSize: 14,
    },
    h1: {
      fontSize: "2.5rem !important",
    },
    h2: {
      fontSize: "1.5rem !important",
    },
    h3: {
      fontSize: 16,
    },
  },
});

let viceTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#d50000",
      light: "#ff5131",
      dark: "#9b0000",
      contrastText: "#fff",
    },
  },
});
export { viceTheme };
export default theme = responsiveFontSizes(theme);
