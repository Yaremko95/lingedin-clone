import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ offset, ...theme }) => ({
  container: {
    position: "fixed",
    zIndex: 1000,
    bottom: 0,
    right: 0,
    height: 0,
    overflow: "visible",
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
    alignItems: "flex-end",
  },
  animatedContainer: {
    height: "400px",
    width: "344px",
    boxShadow: "0 4px 12px rgba(0,0,0, 0.3)",
    margin: "0 10px",
    // boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
    cursor: "pointer",
    position: "relative",

    display: "flex",
    flexDirection: "column",
    borderRadius: "0.8rem 0.8rem 0 0",
    flex: "0 0 344px",
    minWidth: "0",
    background:
      "linear-gradient(to bottom,transparent 2px,var(--white,#fff) 2px)",

    // overflowY: "auto",
  },
}));
