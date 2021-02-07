import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
  contentWrapper: {
    margin: "auto",
    padding: theme.spacing(1, 0, 1, 0),
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: "2rem",
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
}));
