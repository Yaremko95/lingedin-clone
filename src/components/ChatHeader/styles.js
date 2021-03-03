import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ offset, ...theme }) => ({
  container: {
    display: "flex",
    // width: "100%",
    padding: theme.spacing(1),
    justifyContent: "space-between",
    "& .header": {
      display: "flex",
      alignItems: "center",
    },
    borderBottom: "1px solid rgba(0,0,0,.15)",
  },
  title: {
    color: "rgba(0,0,0,0.7)",
    fontWeight: "600",
    fontSize: "0.9rem",
  },
  avatar: {
    height: "30px",
    width: "30px",
    marginRight: theme.spacing(1),
  },
  icon: {
    marginLeft: theme.spacing(2),
    color: "rgba(0,0,0,0.7)",
  },
}));
