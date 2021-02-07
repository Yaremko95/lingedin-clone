import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["sans-serif", '"Helvetica Neue"', "Arial"].join(","),
    body1: {},
    body2: {
      fontSize: "0.9rem",
      color: "rgba(0,0,0,0.9)",
      lineHeight: "1.33333",
    },
    h6: {
      fontSize: "0.9rem",
      fontWeight: 600,
      lineHeight: "1.33333",
      color: "rgba(0,0,0,0.9)",
    },
  },
  palette: {
    primary: { main: "#0a66c2" },
  },
  overrides: {
    MuiButton: {
      outlined: {
        borderRadius: "50px",
        padding: "1px",
        width: "100%",
        textTransform: "capitalize",
        fontWeight: 600,
      },
    },
  },
});
