import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["sans-serif", '"Helvetica Neue"', "Arial"].join(","),
    body1: {},
    body2: {
      fontSize: "0.9rem",
      color: "rgba(0,0,0,0.7)",
      lineHeight: "1.33333",
    },
    h3: {
      fontSize: "1.6rem",
      fontWeight: 400,
      lineHeight: "1.33333",
      color: "rgba(0,0,0,0.7)",
      // margin: 0,
      // padding: 0,
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 400,
      lineHeight: "1.33333",
      color: "rgba(0,0,0,0.7)",
      // marginTop: "4px",
      // margin: 0,
      // padding: 0,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.33333",
      color: "rgba(0,0,0,0.7)",
      marginTop: "4px",
      // margin: 0,
      // padding: 0,
    },
    h6: {
      fontSize: "0.9rem",
      fontWeight: 400,
      lineHeight: "1.33333",
      color: "rgba(0,0,0,0.7)",
    },
  },
  palette: {
    primary: { main: "#0a66c2" },
    textPrimary: {
      main: "rgba(0,0,0,0,7)",
    },
  },
  overrides: {
    MuiButton: {
      outlined: {
        borderRadius: "50px",
        padding: "1px 15px",
        // width: "100%",
        textTransform: "capitalize",
        fontWeight: 600,
      },
      contained: {
        // width: "100%",
        padding: "1px 15px",
        borderRadius: "50px",
        textTransform: "capitalize",
        fontWeight: 600,

        color: "#fff",
      },
    },
    MuiLink: {
      root: {
        fontWeight: 600,
      },
    },
    // MuiDialog: {
    //   root: {
    //     width: "700px",
    //   },
    // },
    MuiTextField: {
      root: {
        width: "100%",
        borderRadius: 0,
      },
    },
    // MuiOutlinedInput: {
    //   "&$focused $notchedOutline": {
    //     borderColor: "green",
    //   },
    // },
    MuiDialogTitle: {
      root: {
        fontSize: "1.6rem",
        fontWeight: 400,
        lineHeight: "1.33333",
        color: "rgba(0,0,0,0.7)",
      },
    },
  },
});
