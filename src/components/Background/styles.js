import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginTop: theme.spacing(2),
    justifyContent: "space-between",
    // padding: "24px",
  },
  textCard: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "rgba(0,0,0,0.7)",
    fontWeight: "600",
    fontSize: "1rem",
  },
  company: {
    fontSize: "0.9rem",
    color: "rgba(0,0, 0, 0.7)",
    margin: 0,
    fontWeight: 400,
  },
  date: {
    fontSize: "0.9rem",
    color: "rgba(0,0, 0, 0.6)",
    margin: 0,
    fontWeight: 400,
  },
  img: {
    height: "56px",
    marginRight: theme.spacing(2),
    // marginTop: "4px",
  },
  description: {
    marginTop: theme.spacing(2),
    "& p": {
      margin: 0,
    },
    "& p span": {
      fontSize: "0.9rem",
      color: "rgba(0,0, 0, 0.7)!important",
    },
  },
}));
