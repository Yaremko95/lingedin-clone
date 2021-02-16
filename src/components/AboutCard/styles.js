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
    fontSize: "0.9rem",
    color: "rgba(0,0, 0, 0.7)",
    "& p": {
      margin: 0,
    },
  },
  aboutContainer: {
    position: "relative",
  },
  seeMoreBtn: {
    position: "absolute",
    color: "rgba(0,0, 0, 0.6)",
    backgroundColor: "white",
    cursor: "pointer",
    bottom: 0,
    right: 0,
  },
}));
