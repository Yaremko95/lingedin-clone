import React from "react";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {/*<Grid item xs={9}>*/}
        {/*  <Paper>Hello</Paper>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={3}>*/}
        {/*  <Paper>Hello</Paper>*/}
        {/*</Grid>*/}
      </Grid>
    </div>
  );
}

export default Home;
