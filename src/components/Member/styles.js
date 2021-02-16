import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    marginTop: theme.spacing(3),
  },
  detailsContainer: {
    marginLeft: theme.spacing(1),
  },
  fullName: {
    color: "rgba(0,0,0,0.7)",
    fontWeight: "600",
    fontSize: "0.9rem",
  },
  module: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",

    // position: "relative",
    // maxHeight: "calc(0.8rem*3)",
    // paddingRight: "1rem",
    // "&::before": {
    //   position: "absolute",
    //   content: '"..."',
    //   bottom: 0,
    //   right: 0,
    // },
  },
  role: {
    color: "rgba(0,0,0,0.5)",
    fontSize: "0.8rem",
  },
  avatar: {
    height: "50px",
    width: "50px",
  },
}));
