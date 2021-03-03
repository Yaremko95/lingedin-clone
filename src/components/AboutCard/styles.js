import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  headingWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "24px",
  },
  quillContainer: {
    width: "550px",
    height: "100px",
    border: "1px solid black",
  },
  aboutText: {
    "& p": {
      margin: 0,
      fontSize: "0.9rem",
      color: "rgba(0,0, 0, 0.7)!important",
    },
    "& p span": {
      fontSize: "0.9rem",
      color: "rgba(0,0, 0, 0.7)!important",
    },
  },
  aboutContainer: {
    position: "relative",
    marginTop: theme.spacing(2),
  },
  seeMoreBtn: {
    color: "rgba(0,0, 0, 0.6)",
    backgroundColor: "white",
    cursor: "pointer",
    bottom: 0,
    "&.positionRight": {
      right: 0,
      position: "absolute",
    },
    "&.positionLeft": {
      // marginTop: "0.8rem",
    },
  },
}));
