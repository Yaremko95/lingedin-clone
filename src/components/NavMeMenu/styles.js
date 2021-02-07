import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1, 1, 1, 1),
  },
  wrapper: {
    backgroundColor: "#fff",
    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 6px 9px rgba(0,0,0,.2)",
    width: "280px",
    borderRadius: "5px",
  },
  profileContent: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  header: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1, 1, 1, 1),
  },

  avatar: {
    height: theme.spacing(6),
    width: theme.spacing(6),
  },
  link: {
    textDecoration: "none",
  },
  title: {
    color: "rgba(0,0,0,0.6)",
    margin: theme.spacing(1, 0, 1, 0),
  },
}));
