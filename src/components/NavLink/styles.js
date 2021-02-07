import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    margin: theme.spacing(1, 0, 1, 4),
    color: "rgba(0,0,0, 0.6)",
  },
  icon: {
    fontSize: "1.5rem",
  },
  titleWrapper: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "0.7rem",
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));
