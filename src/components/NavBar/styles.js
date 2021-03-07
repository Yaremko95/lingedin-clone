import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
  },
  contentWrapper: {
    margin: "auto",
    // padding: theme.spacing(1, 0, 1, 0),
    width: "55%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: "2rem",
    marginRight: "16px",
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
}));
