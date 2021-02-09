import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    height: "60px",
    alignSelf: "flex-start",
  },
  cardLayout: {
    width: "352px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    padding: "24px 32px 32px",
    borderRadius: "8px",
  },
  linkContainer: {
    width: "352px",
    display: "flex",
    justifyContent: "center",
    padding: "24px 32px 32px",
  },
}));
