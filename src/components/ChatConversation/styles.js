import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
  user: {
    padding: "0 10px",
  },
  avatar: {
    height: "40px",
    width: "40px",
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
  listItem: {
    alignItems: "flex-start",
  },
  listItemText: {
    marginTop: 0,
  },
  msgText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    margin: "0 auto",

    "& p": {
      margin: 0,
      fontSize: "0.8rem",

      color: "rgba(0,0, 0, 0.5)!important",
    },
    "& p span": {
      fontSize: "0.8rem",
      verticalAlign: "middle",
      margin: "0 1px",
      color: "rgba(0,0, 0, 0.5)!important",
    },
  },
  msgIcon: {
    top: "16px",
  },
}));
