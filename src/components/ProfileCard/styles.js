import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    overflow: "hidden",
    backgroundImage:
      "url(https://static-exp1.licdn.com/sc/h/cpemy7gsm8bzfb5nnbbnswfdm)",
    backgroundSize: "100% 170px",
    backgroundPosition: "left top ",

    backgroundRepeat: "no-repeat",
    borderRadius: "0.8rem 0.8rem ",
  },
  contentContainer: {
    margin: "60px 24px 18px 24px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  avatar: {
    width: "150px",
    height: "150px",
    border: "4px solid white",
  },
  mainContent: {
    // width: "100%",
    padding: "0 24px 24px 24px",
  },
  contactInfo: {
    display: "flex",
    // width: "60%",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    display: "flex",
    // width: "55%",
    justifyContent: "space-between",
    padding: "8px 0",
  },
  eduInfo: {
    display: "flex",
    alignItems: "center",
  },
  eduLogo: {
    height: "30px",
    margin: "0 10px 0 72px",
  },
}));
