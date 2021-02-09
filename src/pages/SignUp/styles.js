import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mt24: {
    marginTop: "24px",
  },
  button: {
    width: "100%",
    fontSize: "1rem",
    marginTop: "24px",
    padding: "10px 0",
  },
  linkContainer: {
    width: "80%",
    margin: "auto",
    marginTop: "24px",
  },
  lineContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: "24px 0 0 0",
  },
  line: {
    width: "45%",
    height: "1px",
    backgroundColor: "rgba(0,0,0, 0.2)",
  },

  orSpan: {
    fontSize: "1.rem",
    color: "rgba(0,0,0, 0.8)",
  },
}));
