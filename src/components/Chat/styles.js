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
  footer: {
    // width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1, 0),
    backgroundColor: "#f9fafb",
  },
  footerSectionWrapper: {
    display: "flex",
    position: "relative",
  },
  footerIcon: {
    fontSize: "1.2rem",

    color: "rgba(0, 0, 0, 0.6)",
    margin: theme.spacing(0, 1),
  },
  emojiSection: {
    position: "absolute",
  },
}));
