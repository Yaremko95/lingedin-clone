import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  background: {
    height: "100vh",
    backgroundColor: "#F3F2EF",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#F3F2EF",
    padding: "24px 0",
  },
  logo: {
    height: "60px",
  },
  cardLayout: {
    width: "352px",
    backgroundColor: "#fff",
    padding: "24px 32px 32px",
    borderRadius: "8px",
  },
  linkContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
  },
}));
