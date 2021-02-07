import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FFF",
    borderRadius: "0.8rem",
    marginBottom: theme.spacing(2),
    // padding: "24px",
    "&.isPadding": {
      padding: "24px",
    },
  },
}));
