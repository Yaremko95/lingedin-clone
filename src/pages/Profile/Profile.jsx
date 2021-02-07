import React from "react";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "../../components/Card";
import ProfileCard from "../../components/ProfileCard";
import AboutCard from "../../components/AboutCard";

function Profile(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={9}>
          <Card>
            <ProfileCard />
          </Card>
          <Card padding>
            <AboutCard />
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Paper>Hello</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
