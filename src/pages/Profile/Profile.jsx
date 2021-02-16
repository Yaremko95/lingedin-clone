import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "../../components/Card";
import ProfileCard from "../../components/ProfileCard";
import AboutCard from "../../components/AboutCard";
import { AuthContext } from "../../context/auth/Auth";
import { withRouter } from "react-router-dom";
import backend from "../../clients/backemd.client";
import Typography from "@material-ui/core/Typography";
import Member from "../../components/Member";
function Profile(props) {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const { user: authorizedUser } = useContext(AuthContext);
  const { userId } = props.match.params;
  useEffect(() => {
    if (userId === "me" || authorizedUser.id === parseInt(userId)) {
      setUser({ ...authorizedUser, authorized: true });
    } else {
      (async () => {
        try {
          const { data } = await backend.get("/users/" + userId);
          console.log("data", data);
          setUser({ ...data, authorized: false });
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [userId, authorizedUser]);
  useEffect(() => {
    (async () => {
      try {
        console.log("here!!");
        const { data } = await backend.get("/users");
        console.log(data);
        setUsers(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Card>
            <ProfileCard user={user} />
          </Card>
          <Card padding>
            <AboutCard user={user} />
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper>Hello</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>Hello</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.cardContainer}>
                <Typography variant={"h4"} className={classes.title}>
                  People also viewed
                </Typography>
                {users.map((user) => (
                  <Member user={user} key={user.id} />
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Profile);
