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
  footer: {
    // width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1, 0),
    backgroundColor: "#f9fafb",
  },
  footerSectionWrapper: {
    display: "flex",
  },
  footerIcon: {
    fontSize: "1.2rem",

    color: "rgba(0, 0, 0, 0.6)",
    margin: theme.spacing(0, 1),
  },
  listItem: {
    alignItems: "flex-start",
  },
  listItemText: {
    marginTop: 0,
  },
  msgText: {
    "& p": {
      margin: 0,
      fontSize: "0.7rem",
      display: "flex",
      //justifyContent: "center",
      alignItems: "center",
      color: "rgba(0,0, 0, 0.7)!important",
    },
    "& p span": {
      fontSize: "0.6rem",
      marginLeft: "1px",
      color: "rgba(0,0, 0, 0.7)!important",
    },
  },
}));
