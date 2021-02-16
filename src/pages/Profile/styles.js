import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
    width: "60%",
    margin: "auto",
  },
  cardContainer: {
    padding: theme.spacing(2),
  },
  title: {
    color: "rgba(0,0,0,0.7)",
    fontWeight: "600",
    fontSize: "1rem",
  },
}));
