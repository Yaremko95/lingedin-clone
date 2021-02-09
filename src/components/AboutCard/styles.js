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
}));
