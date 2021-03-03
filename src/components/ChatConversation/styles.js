import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
  user: {
    padding: "0 10px",
  },
  avatar: {
    height: "48px",
    width: "48px",
  },
  title: {
    color: "rgba(0,0,0,0.7)",
    fontWeight: "600",
    fontSize: "0.9rem",
  },
  module: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
  msg: {
    color: "rgba(0,0,0,0.5)",
    fontSize: "0.8rem",
  },
}));
